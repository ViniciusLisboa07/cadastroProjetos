const express = require('express');
const router = require('./routes/index');

// config

const app = express();
app.use('/', router);

app.use(express.json());

module.exports = app;