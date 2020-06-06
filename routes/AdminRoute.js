const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/', async (req, res) => {
  let {
    fname,
    lname,
    email,
    password,
    tel,
    town,
    role,
    pulpitre,
    choer,
  } = req.body;

  try {
    let admin = await User.findOne({ tel });
    if (admin) {
      return res
        .status(400)
        .json({ msg: 'This admin Already Exists As a user' });
    }
    admin = new User({
      fname,
      lname,
      email,
      password,
      tel,
      town,
      role,
      pulpitre,
      choer,
    });
    const salt = await bcrypt.genSalt(12);
    Admin.password = await bcrypt.hash(password, salt);
    await admin.save();
    const payload = {
      admin: {
        admin: admin.id,
      },
    };
    jwt.sign(payload, 'helohfff', { expiresIn: 36000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

module.exports = router;
