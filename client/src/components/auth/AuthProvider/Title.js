import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.margin.auth,
  },
}));

function Title(props) {
  const { text } = props;
  const classes = useStyles();

  return (
    <Typography
      component='h1'
      variant='h4'
      className={ classes.root }
    >
      { text }
    </Typography>
  );
}

export default Title;
