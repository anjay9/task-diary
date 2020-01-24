import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: theme.margin.item,
  },
}));

function SubmitButton(props) {
  const classes = useStyles();
  const { text } = props;
  return (
    <Button
      fullWidth
      type='submit'
      variant='contained'
      color='primary'
      className={ classes.button }
    >
      { text }
    </Button>
  );
}

export default SubmitButton;
