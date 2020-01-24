function getDayEnd(dayStart) {
  const end = new Date((dayStart).getTime() + 60 * 60 * 24 * 1000);
  return end;
}

module.exports = getDayEnd;
