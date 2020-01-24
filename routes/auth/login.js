const express = require('express');
const router = express.Router();
const passport = require('passport');

const sendIdToken = require('./functions/sendIdToken');

router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {

    if (err) return res.json({ message: 'An error occurred' });

    if (info) return res.json({ message: 'Wrong credentials' });

    req.login(user, (err) => {

      if (err) return res.json({ message: 'An error occurred' });

      return sendIdToken(user, res);
    });
  })(req, res, next);
});



module.exports = router;
