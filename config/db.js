const mongoose = require('mongoose');
const colors = require('colors');
const conn = async () => {
  try {
    await mongoose.connect(
      ' mongodb+srv://IWD:IWD123@cluster0-la2vb.azure.mongodb.net/bigal_database?retryWrites=true&w=majority',
      {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB connected `.blue);
  } catch (err) {
    console.log(`Error:${err.message}`.red.underline.bold);
  }
};

module.exports = conn;
