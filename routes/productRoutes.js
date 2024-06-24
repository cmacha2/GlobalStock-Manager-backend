const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { createProductHandler, getItemsHandler, getNextSkuHandler, saveCredentialsHandler, getCredentialsHandler } = require('../controllers/productController');

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

const uploadsDir = path.join(__dirname, '..', 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Routes
router.post('/create-product', upload.single('image'), createProductHandler);
router.get('/items/:userId', getItemsHandler);
router.get('/next-sku/:userId/:category', getNextSkuHandler); // Update to include userId
router.post('/save-credentials', saveCredentialsHandler);
router.get('/credentials/:userId', getCredentialsHandler);

module.exports = router;
