const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const Task = require('../../../models/Task');

function doesUserHaveTheTask(userId, taskId, res, callback) {
  Task.findOne({ _id: ObjectId(taskId), author: userId })
  .exec((err, task) => {
    if (err) return res.json({ message: 'An error occurred' });
    if (!task) return res.json({ message: 'The provided task does not exist' });
    return callback();
  });
}

module.exports = doesUserHaveTheTask;
