import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import Full from './Full';
import Mobile from './Mobile';

const useStyles = makeStyles(theme => ({
  toolbarSpace: theme.mixins.toolbar,
}));

function Body(props) {
  const classes = useStyles();
  const greaterThanMedium = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <Fragment>
      <div className={ classes.toolbarSpace } />
      {
        (greaterThanMedium)
          ? <Full />
          : <Mobile />
      }
    </Fragment>
  );
}

export default Body;
