const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  taskType: {
    type: mongoose.Types.ObjectId,
    ref: 'TaskType',
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
