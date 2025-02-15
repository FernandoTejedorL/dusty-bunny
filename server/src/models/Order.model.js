const mongoose = require('mongoose');
const OrderScheme = require('../schemes/orders.scheme');

const OrderModel = mongoose.model('Order', OrderScheme);

module.exports = OrderModel;
