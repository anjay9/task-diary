import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Logo } from './logo.svg';

const useStyles = makeStyles(theme => ({
  logo: {
    width: 48,
    height: 48,
  },
}));

function AppButton(props) {
  const classes = useStyles();

  return <Logo className={ classes.logo } />;
}

export default AppButton;
