const express = require('express');
const dotenv = require('dotenv');

const database = require('./config/db');
dotenv.config({ path: './config/config.env' });

database();

const app = express();

app.use(express.json());

app.use('/api/user', require('./routes/userRoute'));
app.use('/api/auth', require('./routes/loginRoute'));
app.use('/api/admin', require('./routes/adminRoute'));
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.mode} mode on port ${PORT}`.yellow
  );
});
