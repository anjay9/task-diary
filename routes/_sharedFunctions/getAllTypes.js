const TaskType = require('../../models/TaskType');

function getAllTypes(userId) {
  TaskType.find({ author: userId }, (err, tasks) => {
    return tasks;
  });
}

module.exports = getAllTypes;
