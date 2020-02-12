function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function convertTasks(tasks) {
  if (!tasks) return [];
  const convertedTasks = tasks.map(task => {
    const { name, color } = task.taskType;
    const { start, end } = task;

    const startTime = formatAMPM(start);
    const endTime = formatAMPM(end);

    const millisecondsDiff = Math.abs( start - end );
    let minutes = Math.floor((millisecondsDiff / (1000 * 60)) % 60);
    let hours = Math.floor((millisecondsDiff / (1000 * 60 * 60)) % 24);

    if (millisecondsDiff > 79200000) {
      minutes = 0;
      hours = 0;
    }

    return {
      taskId: task._id,
      typeId: task.taskType._id,
      name,
      colorHex: color.hex,
      startDate: start,
      endDate: end,
      startTime,
      endTime,
      hours,
      minutes
    };
  });

  return convertedTasks;
}

module.exports = convertTasks;
