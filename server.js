const express = require('express');
const dotenv = require('dotenv');

const database = require('./config/db');
dotenv.config({ path: '/config/config' });

database();

const app = express();

app.use(express.json());

app.use('/api/admin', require('./routes/adminRoute'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.mode} mode on port ${PORT}`.yellow
  );
});
