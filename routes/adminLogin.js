const express = require('express');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// router.get('/', async (req, res) => {
//   let admin = await Admin.findById(req.params.id).select('-password');

//   res.json({ admin });
// });

router.post('/', async (req, res) => {
  let { tel, password } = req.body;

  try {
    let admin = await Admin.findOne({ tel });
    if (!admin) {
      return res
        .status(400)
        .json({ msg: " informations d'identification invalides" });
    }

    let decrypt = await bcrypt.compare(password, admin.password);
    if (!decrypt) {
      return res
        .status(400)
        .json({ msg: " informations d'identification invalides" });
    }
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
