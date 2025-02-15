const mongoose = require('mongoose');

const OrderScheme = mongoose.Schema(
  {
    userId: String,
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
