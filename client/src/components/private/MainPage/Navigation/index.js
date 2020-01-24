import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  useMediaQuery,
  AppBar,
  Toolbar,
} from '@material-ui/core';

import {
  AppButton,
  DateButtons,
  EmptyIconSpace,
  MobilePagesTogler,
} from './components';

const useStyles = makeStyles(theme => ({
  toolbar: {
    height: 56,
    // default height
    [theme.breakpoints.up('sm')]: {
      height: 64,
    },
    justifyContent: 'space-between',
  },
  additionalToolbar: {
    justifyContent: 'center',
  },
  botAppBar: {
    top: 'auto',
    bottom: 0,
  },
}));

function Navigation() {
  const classes = useStyles();
  const greaterThanMedium = useMediaQuery(theme => theme.breakpoints.up('md'));
  const greaterThanSmall = useMediaQuery(theme => theme.breakpoints.up('sm'));
  //return null;
  return (
    <Fragment>
      <AppBar>
        {
          <Toolbar className={ classes.toolbar }>
            <AppButton />
            <DateButtons />
            { (greaterThanSmall) ? <EmptyIconSpace /> : null }
          </Toolbar>
        }
      </AppBar>
      { (greaterThanMedium) ? null : <MobilePagesTogler /> }
    </Fragment>
  );
}

export default Navigation;
