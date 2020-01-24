import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import Task from './Task';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: -theme.margin.smItem,
    marginBottom: -theme.margin.smItem,
  },
}));

function TaskList(props) {
  const { pageTasks } = props;
  const classes = useStyles();

  if (Array.isArray(pageTasks)) {
    if (pageTasks.length === 0) {
      return (
        <Typography align='center' variant='body1'>
          This day does not contain any tasks.
        </Typography>
      );
    }
    return (
      <div className={ classes.root }>
        {
          pageTasks.map((task, index) => (
            <Task
              key={ index }
              taskId={ task.taskId }
              typeId={ task.typeId }
              name={ task.name }
              colorHex={ task.colorHex }
              startDate={ task.startDate }
              endDate={ task.endDate }
              startTime={ task.startTime }
              endTime={ task.endTime }
              hours={ task.hours }
              minutes={ task.minutes }
            />
          ))
        }
      </div>
    );
  }

  return null;
}

function mapState(state) {
  const { pageTasks } = state.pageTasks;
  return { pageTasks };
}

export default connect(
  mapState,
)(TaskList);
