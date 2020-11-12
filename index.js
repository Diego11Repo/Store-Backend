const express = require('express');
const cors = require('cors');
const config = require('./config');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
debugger;

// Routes
app.use(require('./routes/products'));
app.use(require('./routes/login'));

app.listen(config.port, () => {
  console.log(`Running server on port ${config.port}`);
});
