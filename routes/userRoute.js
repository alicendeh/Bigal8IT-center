const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// register new  user
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
    post,
  } = req.body;

  try {
    let user = await User.findOne({ tel });
    if (user) {
      return res.status(400).json({ msg: 'This user Already Exists' });
    }
    user = new User({
      fname,
      lname,
      email,
      password,
      tel,
      town,
      role,
      pulpitre,
      choer,
      post,
    });
    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

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

//update a user to an admin
router.put('/updatePost/:id', async (req, res) => {
  let { post } = req.body;

  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return res.status(400).json({ msg: 'no such user' });
  }
  res.json({ user });
});
// get all users from database
router.get('/allusers', async (req, res) => {
  let user = await User.find();
  res.status(200).json({ user });
});
module.exports = router;
