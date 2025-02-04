const mongoose = require('mongoose');
const ProductScheme = require('../schemes/products.scheme');

const ProductModel = mongoose.model('Product', ProductScheme);

module.exports = ProductModel;
