const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ShippingAddressSchema = new mongoose.Schema({
  streetName: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  postalCode: {type: String, required: true},
  country: {type: String, required: true}
});

module.exports = mongoose.model('ShippingAddress', ShippingAddressSchema);