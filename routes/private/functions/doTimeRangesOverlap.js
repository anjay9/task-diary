function doTimeRangesOverlap(startString, endString, tasks) {
  const start = new Date(startString);
  const end = new Date(endString);
  for (let i = 0; i < tasks.length; i++) {
    if ((start <= tasks[i].start && end > tasks[i].start)
    || (end >= tasks[i].end && start < tasks[i].end)) {
      return true;
    }
  }
  return false;
}

module.exports = doTimeRangesOverlap;
