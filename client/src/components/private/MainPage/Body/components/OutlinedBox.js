import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Box, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  box: {
    marginTop: theme.margin.main,
    marginBottom: theme.margin.main,
    borderColor: theme.palette.outline.main,
  },
  head: {
    textAlign: 'center',
    margin: theme.margin.side,
    marignTop: theme.margin.main,
    marginBottom: theme.margin.headBot,
  },
  divider: {
    backgroundColor: theme.palette.outline.main,
  },
  body: {
    margin: theme.margin.side,
    marginTop: theme.margin.main,
    marginBottom: theme.margin.bodyBot,
  },
}));

function OutlinedBox(props) {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <Box border={ 1 } borderRadius={ 10 } className={ classes.box }>

      <div className={ classes.head }>
        <Typography variant='h5'>{ title }</Typography>
      </div>

      <Divider className={ classes.divider } />

      <div className={ classes.body }>
        { children }
      </div>

    </Box>
  );
}

export default OutlinedBox;
