const express = require('express');
const User = require('../models/User');
const Song = require('../models/Songs');
const router = express.Router();
const auth = require('../middleware/auth');

// adding a song by an admin
router.post('/', auth, async (req, res) => {
  let check = await User.findById(req.user.id);
  if (check.post === 'admin') {
    let { author, mass, liturgy, lang, type, title, admin, lyrics } = req.body;
    try {
      let admin = new Song({
        author,
        mass,
        liturgy,
        lang,
        type,
        title,
        lyrics,
        admin: req.user.id,
      });
      await admin.save();
      res.json({ admin });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
      console.log(err.message);
    }
  }
  if (admin.post === 'user') {
    res.json('Not an admin,access denied');
  }
});

// get songs from particular admin
router.get('/', auth, async (req, res) => {
  let check = await User.findById(req.user.id);
  if (check.post === 'admin') {
    try {
      let song = await Song.find({ admin: req.user.id }).sort({
        date: -1,
      });
      res.json(song);
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
      console.log(err.message);
    }
  }
  if (check.post === 'user') {
    res.json('Not an admin,access denied');
  }
});
// get all songs
router.get('/all/songs', auth, async (req, res) => {
  let check = await User.findById(req.user.id);
  if (check.post === 'admin') {
    try {
      let admin = await Song.find();
      res.json({ admin });
    } catch (err) {
      res.json({ msg: 'Server Error' });
      console.log(err.message);
    }
  }
  if (check.post === 'user') {
    return res.status(404).json('Not an admin,access denied');
  }
});

// admin fetching all admin data
router.get('/adminRole/admin', auth, async (req, res) => {
  const telco = await User.findById(req.user.id);
  if (telco.post === 'super-admin' || telco.post === 'admin') {
    let user = await User.find({ post: 'admin' }).select('-password');
    res.status(200).json({ count: user.length, user });
  }

  if (telco.post === 'user') {
    res.json({ msg: 'Access denied,you are not an admin' });
  }
});

// admin fetching all user data
router.get('/adminRole/user', auth, async (req, res) => {
  const telco = await User.findById(req.user.id);

  if (telco.post === 'super-admin' || telco.post === 'admin') {
    let user = await User.find({ post: 'user' }).select('-password');
    res.status(200).json({ count: user.length, user });
  }

  if (telco.post === 'user') {
    return res.json({ msg: 'Access denied,you are not an admin' });
  }
});

// admin info update
router.put('/updateInfo/:id', auth, async (req, res) => {
  let admin = await User.findById(req.user.id);
  try {
    if (admin.post === 'admin') {
      let updateProfile = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          runValidators: true,
          new: true,
        }
      );
      if (!updateProfile) {
        return res.status(400).json({ msg: 'no such user' });
      }
      res.json({ updateProfile });
    }
    if (admin.post === 'user') {
      return res
        .status(500)
        .json({ msg: 'Access denied,you are not an admin' });
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

// edit songs:admin
router.put('/updateSong/:id', auth, async (req, res) => {
  let admin = await User.findById(req.user.id);
  try {
    if (admin.post === 'admin') {
      let updateSong = await Song.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
      });
      if (!updateSong) {
        return res.status(400).json({ msg: 'no such user' });
      }

      
      res.json({ updateSong });
    }
    if (admin.post === 'user') {
      return res
        .status(500)
        .json({ msg: 'Access denied,you are not an admin' });
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});
module.exports = router;
