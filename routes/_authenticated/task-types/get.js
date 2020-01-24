const express = require('express');
const router = express.Router();
const passport = require('passport');

const TaskType = require('../../../models/TaskType');
const convertTypes = require('../../sharedFunctions/convertTypes');

router.post('/', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {

    if (err) {
      return res.json({ message: 'an error occured' });
    }

    else if (user) {
      TaskType.find({
        author: user._id
      }, (err, types) => {
        const convertedTypes = convertTypes(types);
        // i think it may return tasks & 'success' even if error occured
        return res.json({
          message: 'success',
          types: convertedTypes
        });
      });
    }

    else return res.json({ message: 'failure' });

  })(req, res, next);
});

module.exports = router;
