const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('*', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {

    if (err) return res.json({ message: 'error' });

    else if (user) {
      req.userId = user._id;
      return next();
    }

    else return res.json({ message: 'invalid-id-token' });

  })(req, res, next);
});

router.use('/get-data', require('./get-data'));
router.use('/set-type', require('./set-type'));
router.use('/delete-type', require('./delete-type'));
router.use('/set-task', require('./set-task'));
router.use('/delete-task', require('./delete-task'));

module.exports = router;
