const mongoose = require('mongoose');

const OrderScheme = mongoose.Schema(
  {
    userId: String,
    totalPrice: Number,
    orderContent: [
      {
        productId: String,
        quantity: Number,
      },
    ],
  },
  { collection: 'orders' }
);

module.exports = OrderScheme;
