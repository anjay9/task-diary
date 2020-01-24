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
      const { typeId, start, end, date } = req.body;
      Task.create({
        author: user._id,
        taskType: typeId,
        start: start,
        end: end
      }, (err, created) => {
        let desiredDate = new Date();
        if (date) desiredDate = new Date(date);
        const dayStart = getDayStart(desiredDate);
        const dayEnd = getDayEnd(dayStart);
        Task.find({
          author: user._id,
          end: { $gt: dayStart },
          start: { $lt: dayEnd }
        })
        .populate('taskType')
        .exec((err, foundTasks) => {
          const tasks = convertTasks(foundTasks);
          // i think it may return tasks & 'success' even if error occured
          res.json({
            message: 'success',
            date: dayStart,
            tasks: tasks
          });
        });
      });
    }

    else return res.json({ message: 'failure' });

  })(req, res, next);
});

module.exports = router;
