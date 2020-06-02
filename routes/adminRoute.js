const express = require('express');
const Admin = require('../models/Admin');
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
    let admin = await Admin.findOne({ tel });
    if (admin) {
      return res.status(400).json({ msg: 'This Admin Already Exists' });
    }
    admin = new Admin({
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
    admin.password = await bcrypt.hash(password, salt);
    await admin.save();
    res.json({ admin });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

module.exports = router;
