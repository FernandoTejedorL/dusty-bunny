const mongoose = require('mongoose');

const QueryScheme = mongoose.Schema(
  {
    type: String,
    name: String,
    email: String,
    topic: String,
    description: String,
  },
  { collection: 'queries' }
);

module.exports = QueryScheme;
