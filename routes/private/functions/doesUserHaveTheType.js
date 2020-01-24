const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const TaskType = require('../../../models/TaskType');

function doesUserHaveTheType(userId, typeId, res, callback) {
  TaskType.findOne({ _id: ObjectId(typeId), author: userId })
  .exec((err, type) => {
    if (err) return res.json({ message: 'An error occured' });
    if (!type) return res.json({ message: 'The provided task type does not exist'  });
    return callback();
  });
}

module.exports = doesUserHaveTheType;
