const axios = require('axios');

const getItems = async () => {
    try {
        const token = '61b41ba5-8ac3-444a-373a-92cf46ff0074'
        const mId = '2BDXNJZPKKT51'
      const url = `https://api.clover.com/v3/merchants/${mId}/items?expand=categories,itemStock&limit=1000&offset=1000`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      return response.data.elements.length
    } catch (error) {
      console.error("Error while getting items:", error.response ? error.response.data : error.message);
      throw new Error("Error while getting items");
    }
  };
getItems().then(console.log)
