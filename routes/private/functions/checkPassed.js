const isValidPageDate = require('./isValidPageDate');
const isValidObjectId = require('./isValidObjectId');
const isValidTypeName = require('./isValidTypeName');
const isValidTaskDate = require('./isValidTaskDate');

function checkPassed(passedOptions, req, res, callback) {
  const defaultOptions = {
    pageDate: false,
    setType: false,
    deleteTypeId: false,
    setTask: false,
    deleteTaskId: false
  };
  const options = { ...defaultOptions, ...passedOptions };

  if (options.pageDate) {
    const pageDateString = req.body.pageDate;
    if (!pageDateString) return res.json({ message: 'No page date provided' });
    const pageDate = new Date(pageDateString);
    if (!isValidPageDate(pageDate)) return res.json({ message: 'Invalid page date' });
  }

  if (options.setType) {
    const { setType } = req.body;
    if (!setType) return res.json({ message: 'No task type id provided' });
    const { typeId, name, colorId } = setType;
    if (typeId && !isValidObjectId(typeId)) return res.json({ message: 'Invalid task type id' });
    if (!name) return res.json({ message: 'No name provided' });
    if (!isValidTypeName(name)) return res.json({ message: 'The provided name does not meet the requirements' });
    if (!colorId) return res.json({ message: 'No color id provided' });
    if (!isValidObjectId(colorId)) return res.json({ message: 'Invalid color id' });
  }

  if (options.deleteTypeId) {
    const { deleteTypeId } = req.body;
    if (!deleteTypeId) return res.json({ message: 'No task type id provided' });
    if (!isValidObjectId(deleteTypeId)) return res.json({ message: 'Invalid task type id' });
  }

  if (options.setTask) {
    const { setTask } = req.body;
    if (!setTask) return res.json({ message: 'No task id provided' });
    const { taskId, typeId, start, end } = setTask;
    if (taskId && !isValidObjectId(taskId)) return res.json({ message: 'Invalid task id' });
    if (!typeId) return res.json({ message: 'No task type id provided' });
    if (!isValidObjectId(typeId)) return res.json({ message: 'Invalid task type id' });
    if (!start) return res.json({ message: 'No start date provided' });
    const startDate = new Date(start);
    if (!isValidTaskDate(startDate)) return res.json({ message: 'Invalid start date' });
    if (!end) return res.json({ message: 'No end date provided' });
    const endDate = new Date(end);
    if (!isValidTaskDate(endDate)) return res.json({ message: 'Invalid end date' });
    if (startDate >= endDate) return res.json({ message: 'Start date must be earlier than end date' });
  }

  if (options.deleteTaskId) {
    const { deleteTaskId } = req.body;
    if (!deleteTaskId) return res.json({ message: 'No task id provided' });
    if (!isValidObjectId(deleteTaskId)) return res.json({ message: 'Invalid task id' });
  }

  callback();
}

module.exports = checkPassed;
