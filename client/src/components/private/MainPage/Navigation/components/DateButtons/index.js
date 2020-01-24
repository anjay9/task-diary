import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PreviousDateButton from './PreviousDateButton';
import DatePickerButton from './DatePickerButton';
import NextDateButton from './NextDateButton';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '25%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
}));

function DateButtons(props) {
  const classes = useStyles();
  return (
    <div className={ classes.root }>
      <PreviousDateButton />
      <DatePickerButton />
      <NextDateButton />
    </div>
  );
}

export default DateButtons;
