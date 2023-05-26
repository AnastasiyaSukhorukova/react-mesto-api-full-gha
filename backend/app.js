const express = require('express');
const mongoose = require('mongoose');

const errorsMiddleware = require('./middlewares/errors');

// eslint-disable-next-line import/order
const cors = require('cors');

const { PORT = 3000 } = process.env;
const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {});

app.use('/', require('./routes/index'));

app.use(errorsMiddleware);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
