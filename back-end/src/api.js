const express = require('express');
require('express-async-errors')
const orderRouter = require('./routes/orderRouter');

const app = express();

app.use(express.json());

app.use('/', orderRouter);

app.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    // case 'Tipo do error':
    //   res.status(400).json({ message }); break;
    default: res.status(500).json({ message });
  }
});

module.exports = app;
