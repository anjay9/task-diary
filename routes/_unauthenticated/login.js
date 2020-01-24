const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const jwtSecret = require('../../config/jwtConfig').secret;
const User = require('../../models/User');
const Task = require('../../models/Task');
const TaskType = require('../../models/TaskType');
const getDayStart = require('../sharedFunctions/getDayStart');
const getDayEnd = require('../sharedFunctions/getDayEnd');
const convertTasks = require('../sharedFunctions/convertTasks');

router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {

    if (err) {
      return console.log(err);//res.json({ message: err });
    }

    if (info) {
      return res.json({ message: info.message });
    }

    req.login(user, (err) => {
      User.findOne({ email: user.email })
      .then(user => {
        const token = jwt.sign(
          { id: user._id },
          jwtSecret
        );
        const startOfToday = getDayStart(new Date());
        const endOfToday = getDayEnd(startOfToday);
        Task.find({
          author: user._id,
          end: { $gt: startOfToday },
          start: { $lt: endOfToday }
        })
        .populate('taskType')
        .exec((err, tasks) => {
          const tasksForClient = convertTasks(tasks);
          res.json({
            message: 'success',
            idToken: token,
            pageDate: startOfToday,
            tasks: tasksForClient
          });
        });
      });
    });

  })(req, res, next);
});

module.exports = router;
