const mongoose = require('mongoose');

const UserSceheme = mongoose.Schema(
  {
    name: String,
    surname: String,
    address: String,
    email: String,
    favs: String,
    orders: String,
  },
  { collection: 'users' }
);

module.exports = UserSceheme;
