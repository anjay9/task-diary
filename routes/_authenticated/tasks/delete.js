const express = require('express');
const router = express.Router();
const passport = require('passport');

const Task = require('../../../models/Task');

router.post('/', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {

    if (err) {
      return res.json({ message: 'an error occured' });
    }

    else if (user) {
      Task.findOneAndDelete({
        author: user._id,
        _id: req.body.taskId
      }, (err, deleted) => {
        Task.find({}, (err, found) => {
          return res.json({
            deleted_task: deleted,
            all_tasks: found
          });
        });
      });
    }

    else return res.json({ message: 'failure' });

  })(req, res, next);
});

module.exports = router;
