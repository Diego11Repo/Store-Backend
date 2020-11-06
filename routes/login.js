const express = require('express');
const router = express.Router();
const user = require('../data/login');


router.get('/user', (req, res) => {
  res.send(user);
});


module.exports = router;