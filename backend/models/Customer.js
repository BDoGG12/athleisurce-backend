const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
import ShippingAddressSchema from './ShippingAddress'

const CustomerSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  emailAddress: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  password: {type: String, required: true},
  shippingAddress: ShippingAddressSchema
});

CustomerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('Customer', CustomerSchema);