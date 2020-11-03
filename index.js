const express = require('express');
const cors = require('cors');
const config = require('./config');
const app = express();

app.use(cors());
debugger

// Routes
app.use(require('./routes/products'));


app.listen(config.port, () => {
  console.log(`Running server on port ${config.port}`)
})