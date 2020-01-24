const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const checkPassed = require('./functions/checkPassed');
const doesUserHaveTheType = require('./functions/doesUserHaveTheType');
const Task = require('../../models/Task');
const doTimeRangesOverlap = require('./functions/doTimeRangesOverlap');
const sendData = require('./functions/sendData');

router.post('/', (req, res, next) => {
  const options = { pageDate: true, setTask: true };
  checkPassed(options, req, res, () => {
    const { userId } = req;
    const { pageDate, setTask } = req.body;
    const { taskId, typeId, start, end } = setTask;
    doesUserHaveTheType(userId, typeId, res, () => {
      if (!taskId) {
        return Task.find({ author: userId })
        .exec((err, tasks) => {
          if (err) return res.json({ message: 'An error occurred' });
          if (tasks && doTimeRangesOverlap(start, end, tasks)) return res.json({ message: 'This time range is already taken by other task' });
          return Task.create({ author: userId, taskType: typeId, start, end }, (err, createdTask) => {
            if (err) return res.json({ message: 'An error occured' });
            return sendData(userId, pageDate, res);
          });
        });
      }
      return Task.findOneAndUpdate(
        { _id: ObjectId(taskId), author: userId },
        { taskType: typeId, start, end },
        { new: true })
      .exec((err, updatedTask) => {
        if (err) return res.json({ message: 'An error occured' });
        if (!updatedTask) return res.json({ message: 'This task does not exist' });
        return sendData(userId, pageDate, res);
      });
    });
  });
});

module.exports = router;
