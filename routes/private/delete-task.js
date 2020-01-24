const express = require('express');
const router = express.Router();

const checkPassed = require('./functions/checkPassed');
const Task = require('../../models/Task');
const sendData = require('./functions/sendData');

router.post('/', (req, res, next) => {
  const options = { pageDate: true, deleteTaskId: true };
  checkPassed(options, req, res, () => {
    const { userId } = req;
    const { pageDate, deleteTaskId } = req.body;
    Task.deleteOne({ _id: deleteTaskId, author: userId })
    .exec((err, deletedTask) => {
      if (err) return res.json({ message: 'An error occured' });
      if (!deletedTask) return res.json({ message: 'This task does not exist' });
      return sendData(userId, pageDate, res);
    });
  });
});

module.exports = router;
