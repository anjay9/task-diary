const express = require('express');
const router = express.Router();

const checkPassed = require('./functions/checkPassed');
const Task = require('../../models/Task');
const TaskType = require('../../models/TaskType');
const sendData = require('./functions/sendData');

router.post('/', (req, res, next) => {
  const options = { pageDate: true, deleteTypeId: true };
  checkPassed(options, req, res, () => {
    const { userId } = req;
    const { pageDate, deleteTypeId } = req.body;
    Task.find({ taskType: deleteTypeId })
    .exec((err, tasks) => {
      if (err) return res.json({ message: 'An error occurred' });
      if (tasks && tasks.length > 0) return res.json({ message: 'The task type can not be deleted because it is in use' });
      TaskType.deleteOne({ _id: deleteTypeId, author: userId })
      .exec((err, deletedType) => {
        if (err) return res.json({ message: 'An error occured' });
        if (!deletedType) return res.json({ message: 'This task type does not exist' });
        return sendData(userId, pageDate, res);
      });
    });
  });
});

module.exports = router;
