const express = require('express');
const router = express.Router();
const passport = require('passport');

const Task = require('../../models/Task');
const TaskType = require('../../models/TaskType');
const Color = require('../../models/Color');
const isValidDate = require('../functions/isValidDate');
const getDayStartFromDate = require('../functions/getDayStartFromDate');
const getDayEndFromDayStart = require('../functions/getDayEndFromDayStart');
const makeFoundDBTasksReadyForClient = require('../functions/makeFoundDBTasksReadyForClient');
const makeFoundDBTypesReadyForClient = require('../functions/makeFoundDBTypesReadyForClient');
const makeFoundDBColorsReadyForClient = require('../functions/makeFoundDBColorsReadyForClient');

router.post('/', (req, res, next) => {
  const { userId } = req;
  const dateFromClient = req.body.pageDate;

  let date;
  if (dateFromClient) {
    date = new Date(dateFromClient);
    if (isValidDate(date) === false) {

      return res.json({ message: 'invalid-page-date' });

    }
  }
  else date = new Date();

  const dayStart = getDayStartFromDate(date);
  const dayEnd = getDayEndFromDayStart(date);

  Task.find({
    author: userId,
    end: { $gt: dayStart },
    start: { $lt: dayEnd }
  })
  .populate('taskType')
  .exec((err, tasks) => {

    if (err) return res.json({ message: 'error' });

    TaskType.find({ author: userId })
    .exec((err, types) => {

      if (err) return res.json({ message: 'error' });

      Color.find({})
      .exec((err, colors) => {

        if (err) return res.json({ message: 'error' });

        const tasksReadyToSend = makeFoundDBTasksReadyForClient(tasks);
        const typesReadyToSend = makeFoundDBTypesReadyForClient(types);
        const colorsReadyToSend = makeFoundDBColorsReadyForClient(colors);

        return res.json({
          message: 'success',
          pageDate: dayStart,
          tasks: tasksReadyToSend,
          taskTypes: typesReadyToSend,
          typeColors: colorsReadyToSend
        });

      });
    });
  });
});

module.exports = router;
