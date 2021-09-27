const express = require('express');
const app = express();

app.use(express.json());

module.exports = app;

const products = require('./routes/product');

app.use('api/v1', products);
