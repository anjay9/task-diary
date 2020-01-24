const isValidDate = require('./isValidDate');

function isValidTaskDate(date) {
  if (!isValidDate(date)) return false;
  if (date.getSeconds() !== 0) return false;
  if (date.getMilliseconds() !== 0) return false;
  return true;
}

module.exports = isValidTaskDate;
