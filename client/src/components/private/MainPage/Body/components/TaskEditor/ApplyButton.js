import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { apply } from '../../../../../../actions/taskEditor';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.margin.item,
    marginBottom: theme.margin.item,
  },
}));

function ApplyButton(props) {
  const { taskId, typeId, start, end, apply } = props;
  const classes = useStyles();

  return (
    <Button
      fullWidth
      variant='contained'
      color='primary'
      className={ classes.button }
      onClick={ () => apply({ taskId, typeId, start, end }) }
    >
      {
        (taskId)
          ? 'Apply changes'
          : 'Add task'
      }
    </Button>
  );
}

function mapState(state) {
  const { taskId, typeId, start, end } = state.taskEditor;
  return { taskId, typeId, start, end };
}

export default connect(
  mapState,
  { apply },
)(ApplyButton);
