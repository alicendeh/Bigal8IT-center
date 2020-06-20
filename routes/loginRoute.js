const express = require('express');
const User = require('../models/User');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const { adminRole } = require('../middleware/AdminRoleCheck');
const jwt = require('jsonwebtoken');
const router = express.Router();
const auth = require('../middleware/auth');

// admin fetching all data
router.get('/adminRole', auth, async (req, res) => {
  const telco = await User.findById(req.user.id);

  if (telco.post === 'admin') {
    let user = await User.find().select('-password');
    res.status(200).json({ user });
  }

  if (telco.post === 'user') {
    res.json({ msg: 'Access denied,you are not an admin' });
  }
});

// get a logged in user
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    res.json(user);

    // let telco = await User.findById(req.user.id);
    // console.log(telco);

    // if (telco.post === 'user') {
    //   console.log('you are a user');
    // }
    // if (telco.post === 'admin') {
    //   console.log('you are an admin');
    // }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

// Authenticate a user
router.post('/', async (req, res) => {
  let { tel, password } = req.body;

  try {
    let user = await User.findOne({ tel });

    if (!user) {
      return res
        .status(400)
        .json({ msg: " informations d'identification invalides sur tttel" });
    }

    let decrypt = await bcrypt.compare(password, user.password);

    if (!decrypt) {
      return res
        .status(400)
        .json({ msg: " informations d'identification invalides sur password" });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.secret,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

module.exports = router;
