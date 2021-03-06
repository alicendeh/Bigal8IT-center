const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  fname: {
    type: String,
    required: [true, 'Prenom reqit'],
  },
  lname: {
    type: String,
    required: [true, 'required too'],
  },
  email: {
    type: String,
    required: [true, 'An email address is required'],
  },
  tel: {
    type: String,
    max: [11, 'Phone cannot be more than 20 characters'],
  },

  password: {
    type: String,
    required: true,
    min: [6, 'Password should be atleast 6 characters'],
  },

  town: {
    type: String,
    required: [true, 'town required'],
  },
  choer: {
    type: String,
    required: [true, 'choer required'],
  },
  role: {
    type: String,
    required: [true, 'role required'],
    enum: ['Alto', 'Soprano', 'Base', 'Teno'],
  },
  pulpitre: {
    type: String,
    required: [true, 'pulpitre required'],
    enum: ['Alice', 'Victoire', 'Austin', 'Rodrigue'],
  },
  post: {
    type: String,
    enum: ['user', 'admin', 'super-admin'],
    default: 'user',
  },
  photo: {
    type: String,
    required: true,
    default: 'no-photo.jpg',
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('UserModel', UserSchema);
