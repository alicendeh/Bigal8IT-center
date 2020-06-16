const express = require('express');
const User = require('../models/User');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

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
        user: user.id,
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
