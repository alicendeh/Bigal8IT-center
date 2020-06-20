const mongoose = require('mongoose');
const colors = require('colors');
const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected `.blue);
  } catch (err) {
    console.log(`Error:${err.message}`.red.underline.bold);
  }
};

module.exports = conn;
