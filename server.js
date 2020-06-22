const express = require('express');
const dotenv = require('dotenv');
const fileupload = require('express-fileupload');
const database = require('./config/db');
dotenv.config({ path: './config/config.env' });
const path = require('path');
database();

const app = express();

app.use(express.json());

app.use(fileupload());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/user', require('./routes/userRoute'));
app.use('/api/auth', require('./routes/loginRoute'));
app.use('/api/admin', require('./routes/adminRoute'));
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.mode} mode on port ${PORT}`.yellow
  );
});
