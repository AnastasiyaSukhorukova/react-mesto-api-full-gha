/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const errorsMiddleware = require('./middlewares/errors');

const app = express();

const { PORT = 3000 } = process.env;

// eslint-disable-next-line import/order
const cors = require('cors');

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {});

app.use('/', require('./routes/index'));

app.use(errorsMiddleware);

app.use(cors());

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
