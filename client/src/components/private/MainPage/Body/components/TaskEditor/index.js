import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import ErrorProvider from './ErrorProvider';
import SelectType from './SelectType';
import StartPicker from './StartPicker';
import EndPicker from './EndPicker';
import ApplyButton from './ApplyButton';
import ClearButton from './ClearButton';
import DeleteButton from './DeleteButton';

const useStyles = makeStyles(theme => ({
  inputs: {
    marginTop: -theme.margin.item,
    marginBottom: -theme.margin.item + theme.margin.main,
  },
  buttons: {
    marginTop: -theme.margin.item,
    marginBottom: -theme.margin.item,
  },
}));

function TaskEditor(props) {
  const { taskId } = props;
  const classes = useStyles();

  return (
    <div>
      <ErrorProvider />
      <div className={ classes.inputs }>
        <SelectType />
        <StartPicker />
        <EndPicker />
      </div>
      <div className={ classes.buttons }>
        <ApplyButton/>
        <ClearButton />
        {
          (taskId)
            ? <DeleteButton />
            : null
        }
      </div>
    </div>
  );
}

function mapState(state) {
  const { taskId } = state.taskEditor;
  return { taskId };
}

export default connect(
  mapState,
)(TaskEditor);
