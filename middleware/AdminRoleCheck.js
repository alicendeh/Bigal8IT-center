const User = require('../models/User');

const adminRole = () => {
  return (req, res, next) => {
    if (req.user.id.post !== 'admin') {
      res.status(401).json({ msg: 'You are not an admin' });
    }
    next();
  };
};

module.exports = {
  adminRole,
};
