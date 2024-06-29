const { createProduct, updateProductStock, getItems, getItemStocks, uploadImage, updateProductImage } = require('../services/cloverService');
const { getCurrentSkuCounter, incrementSkuCounter, saveUserCredentials, getUserCredentials } = require('../services/firebaseService');
const path = require('path');
const fs = require('fs');

const createProductHandler = async (req, res) => {
  const { userId, name, category, subcategory, price, sku, stockCount = 1, cost } = req.body;
  const image = req.file;

  console.log('Request body:', req.body);
  console.log('File:', image);

  if (!userId) {
    return res.status(400).json({ message: 'userId is required' });
  }

  try {
  
    const newProduct = {
      hidden: 'false',
      available: 'true',
      autoManage: true,
      defaultTaxRates: 'true',
      isRevenue: true,
      stockCount: stockCount,
      category: category,
      subcategory: subcategory,
      cost: cost, // Convert cost to cents
      priceType: 'FIXED',
      price: price, // Price is already in cents
      name: name,
      sku: sku,
    };

    const productResponse = await createProduct(newProduct, userId);
    const productId = productResponse.id;

    const inventoryResponse = await updateProductStock(productId, stockCount, userId);

    // if (image) {
    //   const imagePath = path.join(__dirname, '..', 'uploads', image.filename);

    //   // Verify if the file exists
    //   if (!fs.existsSync(imagePath)) {
    //     throw new Error(`File ${imagePath} does not exist`);
    //   }

    //   const imageResponse = await uploadImage(imagePath, userId, productId);
    //   await updateProductImage(productId, imageResponse.id, userId);
    // }

    // Increment the SKU counter after the product is created
    await incrementSkuCounter(userId, category);

    res.status(201).json({
      message: 'Product created and inventory updated',
      product: productResponse,
      inventory: inventoryResponse
    });
  } catch (err) {
    console.error('Error in createProductHandler:', err.message);
    res.status(500).json({ message: 'Error creating product or updating inventory', error: err.message });
  }
};

const getItemsHandler = async (req, res) => {
  const { userId } = req.params;
  const { limit, offset } = req.query;
  try {
    const response = await getItems(userId, parseInt(limit), parseInt(offset));
    res.status(200).json(response);
  } catch (err) {
    console.error('Error in getItemsHandler:', err.message);
    res.status(500).json({ message: 'Error getting products', error: err.message });
  }
};

const getNextSkuHandler = async (req, res) => {
  const { userId, category } = req.params;
  try {
    const skuNumber = await getCurrentSkuCounter(userId, category) + 1;
    res.status(200).json({ count: skuNumber });
  } catch (err) {
    console.error('Error in getNextSkuHandler:', err.message);
    res.status(500).json({ message: 'Error getting next SKU', error: err.message });
  }
};

const saveCredentialsHandler = async (req, res) => {
  const { userId, token, mId } = req.body;
  try {
    await saveUserCredentials(userId, token, mId);
    res.status(200).json({ message: 'Credentials saved successfully' });
  } catch (error) {
    console.error('Error in saveCredentialsHandler:', error.message);
    res.status(500).json({ message: 'Error saving credentials' });
  }
};

const getCredentialsHandler = async (req, res) => {
  const { userId } = req.params;
  try {
    const credentials = await getUserCredentials(userId);
    res.status(200).json(credentials);
  } catch (error) {
    console.error('Error in getCredentialsHandler:', error.message);
    res.status(500).json({ message: 'Error getting credentials' });
  }
};

module.exports = {
  createProductHandler,
  getItemsHandler,
  getNextSkuHandler,
  saveCredentialsHandler,
  getCredentialsHandler
};
