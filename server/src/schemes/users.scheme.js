const mongoose = require('mongoose');

const UserSceheme = mongoose.Schema(
  {
    _id: String,
    name: String,
    surname: String,
    address: String,
    email: String,
    favs: String,
    orders: String,
    vendor: Boolean,
  },
  { collection: 'users' }
);

module.exports = UserSceheme;
