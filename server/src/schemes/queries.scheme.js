const mongoose = require('mongoose');

const QueryScheme = mongoose.Schema(
  {
    type: String,
    name: String,
    email: String,
    topic: String,
    description: String,
    date: String,
    read: Boolean,
  },
  { collection: 'queries' }
);

module.exports = QueryScheme;
