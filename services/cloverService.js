require('dotenv').config();
const { getUserCredentials } = require('./firebaseService');
const axios = require('axios');
const FormData = require('form-data');



// Function to create a category if it doesn't exist
const createCategoryIfNotExists = async (categoryName, subcategoryName, token, mId) => {
  const fullCategoryName = `${subcategoryName} ${categoryName}`;
  try {
    const url = `${process.env.CLOVER_API_URL}/merchants/${mId}/categories`;
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
    const productUrl = `${process.env.CLOVER_API_URL}/merchants/${mId}/items`;
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
    const associationUrl = `${process.env.CLOVER_API_URL}/merchants/${mId}/category_items`;
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
    const url = `${process.env.CLOVER_API_URL}/merchants/${mId}/items/${itemId}`;
    const response = await axios.post(url, {
      stockCount: quantity
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error while updating product stock:", error.response ? error.response.data : error.message);
    throw new Error("Error while updating product stock");
  }
};

const getItems = async (userId, limit = 100, offset = 0) => {
  try {
    const { token, mId } = await getUserCredentials(userId); // Asegúrate de obtener token y mId correctamente
    const url = `${process.env.CLOVER_API_URL}/merchants/${mId}/items?expand=categories,itemStock&limit=${limit}&offset=${offset}`;
    console.log("URL", url)
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const total = response.data.total || 1000; // Asume un número suficientemente grande si no se proporciona
    return { elements: response.data.elements, total };
  } catch (error) {
    console.error("Error while getting items:", error.response ? error.response.data : error.message);
    throw new Error("Error while getting items");
  }
};

const getCategories = async (userId) => {
  try {
    const { token, mId } = await getUserCredentials(userId);
    const url = `${process.env.CLOVER_API_URL}/merchants/${mId}/categories`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data.elements;
  } catch (error) {
    console.error("Error while getting categories:", error.response ? error.response.data : error.message);
    throw new Error("Error while getting categories");
  }
};

// const getItemStocks = async (userId) => {
//   try {
//     const { token, mId } = await getUserCredentials(userId);
//     const url = `${process.env.CLOVER_API_URL}/merchants/${mId}/item_stocks`;
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       }
//     });
//     return response.data.elements;
//   } catch (error) {
//     console.error("Error while getting item stocks:", error.response ? error.response.data : error.message);
//     throw new Error("Error while getting item stocks");
//   }
// };

const uploadImage = async (filePath, userId, itemId) => {
  try {
    const { token, mId } = await getUserCredentials(userId);
    const url = `${process.env.CLOVER_OLO_URL}/menuImage/merchants/${mId}/item/${itemId}`;
    
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
    const url = `${process.env.CLOVER_API_URL}/merchants/${mId}/items/${itemId}`;
    
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
  uploadImage,
  updateProductImage,
  getCategories
};
