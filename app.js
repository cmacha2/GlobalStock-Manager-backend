const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Añadir CORS

// Rutas
app.use('/api', productRoutes);

module.exports = app;
