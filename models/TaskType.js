const mongoose = require('mongoose');

const taskTypeSchema = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: mongoose.Types.ObjectId,
    ref: 'Color',
    required: true
  }
});

const TaskType = mongoose.model('TaskType', taskTypeSchema);

module.exports = TaskType;
