const mongoose = require('mongoose');
const QueryScheme = require('../schemes/queries.scheme');

const QueryModel = mongoose.model('Query', QueryScheme);

module.exports = QueryModel;
