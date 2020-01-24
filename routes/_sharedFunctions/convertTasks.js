function convertTasks(tasks) {
  if (!tasks) return [];
  const convertedTasks = tasks.map(task => {
    const { name, color } = task.taskType;
    const { _id, start, end } = task;
    const convertedStart = `${ start.getHours() }:${ start.getMinutes() }`;
    const convertedEnd = `${ end.getHours() }:${ end.getMinutes() }`;
    const millisecondsDiff = Math.abs( start - end );
    const minutes = Math.floor((millisecondsDiff / (1000 * 60)) % 60);
    const hours = Math.floor((millisecondsDiff / (1000 * 60 * 60)) % 24);
    return {
      id: _id,
      name,
      color,
      start: convertedStart,
      end: convertedEnd,
      hours,
      minutes
    };
  });
  return convertedTasks;
}

module.exports = convertTasks;
