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

function EndPicker(props) {
  const {
    endPickerIsOpened,
    end,
    openInput,
    closeInput,
    setInput,
  } = props;
  const classes = useStyles();

  return (
    <DateTimePicker
      fullWidth
      label='End'
      inputVariant='outlined'
      openTo='hours'
      format='hh : mm a    dd MMM yyyy'
      open={ endPickerIsOpened }
      value={ end }
      onOpen={ () => openInput('endPickerIsOpened') }
      onClose={ () => closeInput('endPickerIsOpened') }
      onChange={ newDate => setInput('end', newDate) }
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
    endPickerIsOpened,
    end,
  } = state.taskEditor;
  return {
    endPickerIsOpened,
    end,
  };
}

export default connect(
  mapState,
  {
    openInput,
    closeInput,
    setInput,
  },
)(EndPicker);
