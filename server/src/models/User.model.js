const mongoose = require('mongoose');
const UserSceheme = require('../schemes/users,scheme');

const UserModel = mongoose.model('User', UserSceheme);
module.exports = UserModel;
