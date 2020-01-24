import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { DatePicker } from '@material-ui/pickers';
import { connect } from 'react-redux';

import { open, close, change } from '../../../../../../actions/pageDate';
import getData from '../../../../../../actions/getData';

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginLeft: theme.margin.item,
    marginRight: theme.margin.item,
    display: 'flex',
    jutifyContent: 'center',
  },
  root: {
    cursor: 'pointer',
    color: 'white',
    padding: 0,
    '&:hover': {
      backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
    },
    '& $input': {
      height: 42,
      width: 100,
      fontSize: 15,
      ['@media (min-width: 350px)']: {
        width: 130,
        fontSize: 18,
      },
      fontWeight: 500,
      textAlign: 'center',
      padding: '2px 0px',
      overflow: 'hidden',
    },
    '&:hover $input': {
      cursor: 'pointer',
    },
    '& $notchedOutline': {
      borderColor: 'rgba(255,255,255, 0.8)',
    },
    '&:hover $notchedOutline': {
      borderColor: 'white',
    },
    '&$focused $notchedOutline': {
      borderColor: 'white',
      borderWidth: 'thin',
    },
  },
  input: {},
  focused: {},
  notchedOutline: {},
  helper: {
    display: 'none',
  },
}));

function DatePickerButton(props) {
  const { isOpened, splitDate, open, close, change } = props;
  const classes = useStyles();

  return (
    <div className={ classes.wrapper }>
      <DatePicker
        value={ splitDate.year + '-' + splitDate.month + '-' + splitDate.day }
        open={ isOpened }
        onOpen={ open }
        onClose={ close }
        onChange={ newDate => change(newDate) }
        error={ false }
        multiline={ true }
        rows={ 2 }
        inputVariant='outlined'
        format=' dd MMM yyyy eeee'
        InputLabelProps={{ classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        } }}
        InputProps={{
          classes: {
            root: classes.root,
            input: classes.input,
            focused: classes.focused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        FormHelperTextProps={{
          classes: { root: classes.helper }
        }}
      />
    </div>
  );
}

function mapState(state) {
  const { isOpened, splitDate, dayOfWeek } = state.pageDate;
  return { isOpened, splitDate, dayOfWeek };
}

export default connect(
  mapState,
  { open, close, change, getData },
)(DatePickerButton);
