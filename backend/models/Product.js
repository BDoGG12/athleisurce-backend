const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ProductSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: { type: mongoose.Schema.Types.Decimal128, required: true },
  size: {type: String, required: true},
  imageURL: {type: String, required: true},
  category: {type: String, required: true}
});

module.exports = mongoose.model('Product', ProductSchema);