const { getUserCredentials } = require('./firebaseService');
const axios = require('axios');
const FormData = require('form-data');

/// Function to create a category if it doesn't exist
// Function to create a category if it doesn't exist
const createCategoryIfNotExists = async (categoryName, subcategoryName, token, mId) => {
  const fullCategoryName = `${subcategoryName} ${categoryName}`;
  try {
    const url = `https://sandbox.dev.clover.com/v3/merchants/${mId}/categories`;
    const categoriesResponse = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!categoriesResponse.data || !categoriesResponse.data.elements) {
      throw new Error("Invalid categories response structure");
    }

    const categories = categoriesResponse.data.elements;
    let category = categories.find(cat => cat.name === fullCategoryName);

    if (!category) {
      const createCategoryResponse = await axios.post(url, {
        name: fullCategoryName
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      category = createCategoryResponse.data;
    }

    console.log('Category created or found:', category);
    return category.id;
  } catch (error) {
    console.error("Error while handling category:", error.response ? error.response.data : error.message);
    throw new Error("Error while handling category");
  }
};

// Function to create a product and associate it with a category
const createProduct = async (newProduct, userId) => {
  console.log("newProduct", newProduct);
  try {
    const { token, mId } = await getUserCredentials(userId);

    // Ensure the category exists or create it
    const categoryId = await createCategoryIfNotExists(newProduct.category, newProduct.subcategory, token, mId);

    // Create the product
    const productUrl = `https://sandbox.dev.clover.com/v3/merchants/${mId}/items`;
    const productData = {
      ...newProduct,
      categories: [{ id: categoryId }]
    };

    const createdProductResponse = await axios.post(productUrl, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const createdProduct = createdProductResponse.data;

    // Associate the product with the category using the correct API endpoint
    const associationUrl = `https://sandbox.dev.clover.com/v3/merchants/${mId}/category_items`;
    const associationResponse = await axios.post(
      associationUrl,
      {
        elements: [
          {
            category: { id: categoryId },
            item: { id: createdProduct.id }
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Product created and associated with category', associationResponse.data);
    return createdProduct;
  } catch (error) {
    console.error("Error while creating the product:", error.response ? error.response.data : error.message);
    throw new Error("Error while creating the product");
  }
};

const updateProductStock = async (itemId, quantity, userId) => {
  try {
    const { token, mId } = await getUserCredentials(userId);
    const sdk = require('../config/cloverConfig')(token);
    return await sdk.inventoryUpdateItemStock({ quantity }, { mId, itemId });
  } catch (error) {
    console.error("Error while updating product stock:", error.message);
    throw new Error("Error while updating product stock");
  }
};

const getItems = async (userId) => {
  try {
    const { token, mId } = await getUserCredentials(userId);
    const sdk = require('../config/cloverConfig')(token);
    return await sdk.inventoryGetItems({expand: 'itemStock%2Ccategories', mId });
  } catch (error) {
    console.error("Error while getting items:", error.message);
    throw new Error("Error while getting items");
  }
};

const getCategories = async (userId) => {
  try {
    const { token, mId } = await getUserCredentials(userId);
    const sdk = require('../config/cloverConfig')(token);
    return await sdk.categoryGetCategories({ mId });
  } catch (error) {
    console.error("Error while getting categories:", error.message);
    throw new Error("Error while getting categories");
  }
};

const getItemStocks = async (userId) => {
  try {
    const { token, mId } = await getUserCredentials(userId);
    const sdk = require('../config/cloverConfig')(token);
    return await sdk.inventoryGetItemStocks({ mId });
  } catch (error) {
    console.error("Error while getting item stocks:", error.message);
    throw new Error("Error while getting item stocks");
  }
};

const uploadImage = async (filePath, userId, itemId) => {
  try {
    const { token, mId } = await getUserCredentials(userId);
    const url = `https://sandbox.dev.clover.com/oloplatform/v1/menuImage/merchants/${mId}/item/${itemId}`;
    
    const form = new FormData();
    form.append('file', filePath);
    
    const response = await axios.post(url, form, {
      headers: {
        ...form.getHeaders(),
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while uploading the image:", error.message);
    throw new Error("Error while uploading the image");
  }
};

const updateProductImage = async (itemId, imageId, userId) => {
  try {
    const { token, mId } = await getUserCredentials(userId);
    const url = `https://sandbox.dev.clover.com/v3/merchants/${mId}/items/${itemId}`;
    
    const data = {
      imageId,
    };
    
    const response = await axios.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while updating product image:", error.message);
    throw new Error("Error while updating product image");
  }
};

module.exports = {
  createProduct,
  updateProductStock,
  getItems,
  getItemStocks,
  uploadImage,
  updateProductImage,
  getCategories
};
