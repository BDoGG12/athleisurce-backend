const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');
const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/fitnessEcommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});