const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const path = require('path');
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

router.put('/img/:id/photo', async (req, res) => {
  let user = await User.findByIdAndUpdate(req.params.id);
  if (!user) {
    res.status(400).json({ msg: 'no such user' });
  }
  let file = req.files.file;
  if (!file) {
    res.status(400).json({ msg: 'enter an image' });
  }
  if (!file.mimetype.startsWith('image')) {
    res.status(400).json({ msg: 'enter a valid image' });
  }
  if (file.size > process.env.MAX_SIZE) {
    res.status(400).json({ msg: 'enter a valid image which is less than 1mb' });
  }
  file.mv(`${process.env.FILE_PATH}/${file.name}`, async (err) => {
    if (err) throw err;
    let data = await User.findByIdAndUpdate(
      req.params.id,
      { photo: file.name },
      { runValidators: true, new: true }
    );
    res.status(200).json({ data });
  });
});

router.put('/folder/:id/folder', async (req, res) => {
  let user = await User.findByIdAndUpdate(req.params.id);
  if (!user) {
    res.status(400).json({ msg: 'no such user' });
  }
  let file = req.files.file;
  console.log(file);

  if (!file) {
    res.status(400).json({ msg: 'enter a folder' });
  }
  if (!file.mimetype.startsWith('application')) {
    res.status(400).json({ msg: 'enter a valid image' });
  }
  if (file.size > process.env.MAX_SIZE) {
    res.status(400).json({ msg: 'enter a valid image which is less than 1mb' });
  }
  file.mv(`${process.env.FILE_PATH}/${file.name}`, async (err) => {
    if (err) throw err;
    let data = await User.findByIdAndUpdate(
      req.params.id,
      { photo: file.name },
      { runValidators: true, new: true }
    );
    res.status(200).json({ data });
  });
});

module.exports = router;
