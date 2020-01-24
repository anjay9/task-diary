const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const jwtSecret = require('../../config/jwtConfig').secret;
const User = require('../../models/User');
const Task = require('../../models/Task');
const TaskType = require('../../models/TaskType');
const isValidDate = require('../functions/isValidDate');
const getDayStartFromDate = require('../functions/getDayStartFromDate');
const getDayEndFromDayStart = require('../functions/getDayEndFromDayStart');
const makeFoundDBTasksReadyForClient = require('../functions/makeFoundDBTasksReadyForClient');
const makeFoundDBTypesReadyForClient = require('../functions/makeFoundDBTypesReadyForClient');
const makeFoundDBColorsReadyForClient = require('../functions/makeFoundDBColorsReadyForClient');

router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {

    if (err) return res.json({ message: 'An error occurred' });

    if (info) return res.json({ message: 'Wrong credentials' });

    req.login(user, (err) => {

      if (err) return res.json({ message: 'An error occurred' });

      User.findOne({ email: user.email })
      .then(user => {
        const userId = user._id;

        const token = jwt.sign(
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
    });
  })(req, res, next);
});

module.exports = router;
