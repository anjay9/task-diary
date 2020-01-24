const getDayStart = require('./getDayStart');
const getDayEnd = require('./getDayEnd');
const Color = require('../../../models/Color');
const TaskType = require('../../../models/TaskType');
const Task = require('../../../models/Task');
const convertColors = require('./convertColors');
const convertTypes = require('./convertTypes');
const convertTasks = require('./convertTasks');

function sendData(userId, dateString, res) {
  const dayStart = getDayStart(new Date(dateString));
  const dayEnd = getDayEnd(dayStart);
  const error = () => res.json({ message: 'An error occured' });;
  Color.find({})
  .exec((err, colors) => {
    if (err) return error();
    TaskType.find({ author: userId })
    .populate('color')
    .exec((err, types) => {
      if (err) return error();
      Task.find({
        author: userId,
        end: { $gt: dayStart },
        start: { $lt: dayEnd }
      })
      .sort({ start: 'asc' })
      .populate({ path: 'taskType', populate: { path: 'color' } })
      .exec((err, tasks) => {
        if (err) return error();
        const readyColors = convertColors(colors);
        const readyTypes = convertTypes(types.reverse());
        const readyTasks = convertTasks(tasks);
        return res.json({
          message: 'success',
          colors: readyColors,
          types: readyTypes,
          pageDate: dayStart,
          pageTasks: readyTasks
        });
      });
    });
  });
}

module.exports = sendData;
