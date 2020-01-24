import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DateTimePicker } from '@material-ui/pickers';
import { connect } from 'react-redux';

import { openInput, closeInput, setInput } from '../../../../../../actions/taskEditor';

const useStyles = makeStyles(theme => ({
  picker: {
    marginTop: theme.margin.item,
    marginBottom: theme.margin.item,
  },
  label: {
    color: theme.palette.label.main,
  },
  input: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  notchedOutline: {
    borderColor: theme.palette.outline.main,
  },
}));

function StartPicker(props) {
  const {
    startPickerIsOpened,
    start,
    openInput,
    closeInput,
    setInput,
  } = props;
  const classes = useStyles();

  return (
    <DateTimePicker
      fullWidth
      label='Start'
      inputVariant='outlined'
      openTo='hours'
      format='hh : mm a    dd MMM yyyy'
      value={ start }
      open={ startPickerIsOpened }
      onOpen={ () => openInput('startPickerIsOpened') }
      onClose={ () => closeInput('startPickerIsOpened') }
      onChange={ newDate => setInput('start', newDate) }
      className={ classes.picker }
      InputLabelProps={{ className: classes.label }}
      InputProps={{
        classes: {
          input: classes.input,
          notchedOutline: classes.notchedOutline,
        }
      }}
    />
  );
}

function mapState(state) {
  const {
    startPickerIsOpened,
    start,
  } = state.taskEditor;
  return {
    startPickerIsOpened,
    start,
  };
}

export default connect(
  mapState,
  {
    openInput,
    closeInput,
    setInput,
  },
)(StartPicker);
