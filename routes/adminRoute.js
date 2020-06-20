const express = require('express');
const User = require('../models/User');
const Song = require('../models/Songs');
const router = express.Router();
const auth = require('../middleware/auth');

// adding a song by an admin
router.post('/', auth, async (req, res) => {
  let check = await User.findById(req.user.id);
  if (check.post === 'admin') {
    let { author, mass, liturgy, lang, type, title, admin } = req.body;
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
    res.json({ msg: 'Access denied,you are not an admin' });
  }
});
module.exports = router;
