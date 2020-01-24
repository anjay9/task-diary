const express = require('express');
const router = express.Router();
const passport = require('passport');

const Task = require('../../../models/Task');
const TaskType = require('../../../models/TaskType');
const getDayStart = require('../../sharedFunctions/getDayStart');
const getDayEnd = require('../../sharedFunctions/getDayEnd');
const convertTasks = require('../../sharedFunctions/convertTasks');

router.post('/', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {

    if (err) {
      return res.json({ message: 'an error occured' });
    }

    else if (user) {
      const { date } = req.body;
      let desiredDate = new Date();
      if (date) desiredDate = new Date(date);
      const startOfToday = getDayStart(desiredDate);
      const endOfToday = getDayEnd(startOfToday);
      Task.find({
        author: user._id,
        end: { $gt: startOfToday },
        start: { $lt: endOfToday }
      })
      .populate('taskType')
      .exec((err, tasks) => {
        const tasksForClient = convertTasks(tasks);
        // i think it may return tasks & 'success' even if error occured
        res.json({
          message: 'success',
          pageDate: startOfToday,
          tasks: tasksForClient
        });
      });
    }

    else return res.json({ message: 'failure' });

  })(req, res, next);
});

module.exports = router;
