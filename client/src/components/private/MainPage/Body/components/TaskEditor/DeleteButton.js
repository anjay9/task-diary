import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { deleteTask } from '../../../../../../actions/taskEditor';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.margin.item,
    marginBottom: theme.margin.item,
  },
}));

function DeleteButton(props) {
  const { taskId, deleteTask } = props;
  const classes = useStyles();

  return (
    <Button
      fullWidth
      variant='contained'
      color='secondary'
      className={ classes.button }
      onClick={ () => deleteTask(taskId) }
    >
      Delete task
    </Button>
  );
}

function mapState(state) {
  const { taskId } = state.taskEditor;
  return { taskId };
}

export default connect(
  mapState,
  { deleteTask },
)(DeleteButton);
