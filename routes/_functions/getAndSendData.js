const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const jwtSecret = require('../../config/jwtConfig').secret;
const Task = require('../../models/Task');
const TaskType = require('../../models/TaskType');
const Color = require('../../models/Color');
const getDayStartFromDate = require('./getDayStartFromDate');
const getDayEndFromDayStart = require('./getDayEndFromDayStart');
const makeFoundDBTasksReadyForClient = require('./makeFoundDBTasksReadyForClient');
const makeFoundDBTypesReadyForClient = require('./makeFoundDBTypesReadyForClient');
const makeFoundDBColorsReadyForClient = require('./makeFoundDBColorsReadyForClient');

function getAndSendData(user, res) {
  User.findOne({ email: user.email })
  .then(user => {
    const userId = user._id;

    const idToken = jwt.sign(
      { id: user._id },
      jwtSecret
    );

    const dayStart = getDayStartFromDate(new Date());
    const dayEnd = getDayEndFromDayStart(dayStart);

    Task.find({
      author: userId,
      end: { $gt: dayStart },
      start: { $lt: dayEnd }
    })
    .populate('taskType')
    .exec((err, tasks) => {

      if (err) return res.json({ message: 'data-error' });

      TaskType.find({ author: userId })
      .exec((err, types) => {

        if (err) return res.json({ message: 'data-error' })

        Color.find()
        .exec((err, colors) => {

          if (err) return res.json({ message: 'data-error' });

          const tasksReadyToSend = makeFoundDBTasksReadyForClient(tasks);
          const typesReadyToSend = makeFoundDBTypesReadyForClient(types);
          const colorsReadyToSend = makeFoundDBColorsReadyForClient(colors);

          return res.json({
            idToken: idToken,
            message: 'success',
            pageDate: dayStart,
            pageTasks: tasksReadyToSend,
            taskTypes: typesReadyToSend,
            typeColors: colorsReadyToSend
          });

        });
      });
    });
  });
}

module.exports = getAndSendData;
