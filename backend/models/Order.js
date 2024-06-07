const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
import ProductSchema from './Product';
import CustomerSchema from './Customer';

const OrderSchema = new mongoose.Schema({
  orderItems: [ProductSchema],
  subtotal: { type: mongoose.Schema.Types.Decimal128, required: true },
  customer: CustomerSchema,
  orderDate: { type: Date, required: true }
});

module.exports = mongoose.model('Order', OrderSchema);