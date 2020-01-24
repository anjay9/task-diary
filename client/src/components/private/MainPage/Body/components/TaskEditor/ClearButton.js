import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { reset } from '../../../../../../actions/taskEditor';
import { switchToTaskList } from '../../../../../../actions/mobilePages';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.margin.item,
    marginBottom: theme.margin.item,
  },
}));

function ClearButton(props) {
  const { taskId, reset, switchToTaskList } = props;
  const classes = useStyles();

  function handleClick() {
    reset();
    if (taskId) switchToTaskList();
  }

  return (
    <Button
      fullWidth
      variant='contained'
      className={ classes.button }
      onClick={ handleClick }
    >
      {
        (taskId)
          ? 'Cancel'
          : 'Clear'
      }
    </Button>
  );
}

function mapState(state) {
  const { taskId } = state.taskEditor;
  return { taskId };
}

export default connect(
  mapState,
  { reset, switchToTaskList },
)(ClearButton);
