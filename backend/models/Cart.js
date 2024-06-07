const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
import CustomerSchema from './Customer';
import ProductSchema from './Product';

const CartSchema = new mongoose.Schema({
  quantity: {type: Number, required: true},
  customerInfo: CustomerSchema,
  productInfo: ProductSchema
});

module.exports = mongoose.model('Cart', CartSchema);