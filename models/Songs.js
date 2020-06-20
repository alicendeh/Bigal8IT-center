const mongoose = require('mongoose');

const SongScheme = mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: ' UserModel',
  },
  author: {
    type: String,
    required: true,
  },
  mass: {
    type: String,
    enum: ['mass-a', 'mass-b', 'mass-c'],
    required: [true, 'mass type required'],
  },
  liturgy: {
    type: String,
    enum: ['lit-a', 'lit-b', 'lit-c'],
    required: [true, 'liturgy required'],
  },
  lang: {
    type: String,
    enum: ['lang-a', 'lang-b', 'lang-c'],
    required: [true, 'Language required'],
  },
  type: {
    type: String,
    enum: ['type-a', 'type-b', 'type-c'],
    required: [true, 'type required'],
  },
  title: {
    type: String,
    required: [true, 'title required'],
  },
  lyrics: {
    type: String,
    required: [true, 'lyrics required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SongModel', SongScheme);
