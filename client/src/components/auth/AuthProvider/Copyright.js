import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.margin.auth,
  },
}));

function Copyright() {
  const classes = useStyles();

  return (
    <Box className={ classes.root }>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        Task Diary
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

export default Copyright;
