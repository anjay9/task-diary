function getDayStart(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const start = new Date(year, month, day);
  return start;
}

module.exports = getDayStart;
