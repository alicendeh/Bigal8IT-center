const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: '/config/config' });

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started in ${process.env.mode} mode on port ${PORT}`);
});
