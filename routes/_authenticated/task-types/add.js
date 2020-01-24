const express = require('express');
const router = express.Router();
const passport = require('passport');

const TaskType = require('../../../models/TaskType');

router.post('/', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {

    if (err) {
      return res.json({ message: 'an error occured' });
    }

    else if (user) {
      TaskType.create({
        author: user._id,
        name: req.body.name,
        color: req.body.color
      }, (err, created) => {
        TaskType.find({}, (err, found) => {
          return res.json({
            added_type: created,
            all_types: found
          });
        });
      });
    }

    else return res.json({ message: 'failure' });

  })(req, res, next);
});

module.exports = router;
