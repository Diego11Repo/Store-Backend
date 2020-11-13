const express = require('express');
const { indexOf } = require('../data/products');
const router = express.Router();
const products = require('../data/products');

/**
 * Get methods
 */

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

/**
 * Post methods
 */

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('received');
});

router.post('/products', (req, res) => {
  const { name, price, img, description } = req.body;
  const id = products.length + 1;
  const newProduct = {
    id,
    name,
    price,
    img,
    description,
  };
  products.push(newProduct);
  res.send(products);
});

/**
 * Put methods
 */

router.put('/products/:id', (req, res) => {
  const { name, price, img, description } = req.body;
  const { id } = req.params;
  const product = products[id - 1];
  name ? (product.name = name) : product.name;
  price ? (product.price = price) : product.price;
  img ? (product.img = img) : product.img;
  description ? (product.description = description) : product.description;
  res.send(product);
});

/**
 * Delete methods
 */
router.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products[id - 1];
  products.splice(product, 1);
  res.send(products);
});
module.exports = router;
