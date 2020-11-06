const express = require('express');
const router = express.Router();
const products = require('../data/products');

router.get('/', (req, res) => {
  res.send('Hello from routes');
});

router.get('/products', (req, res) => {
  res.send(products);
});

router.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.send(products[id - 1]);
});

module.exports = router;