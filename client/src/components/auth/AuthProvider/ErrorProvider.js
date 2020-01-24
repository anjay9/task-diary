import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  box: {
    marginTop: theme.margin.item,
    marginBottom: theme.margin.item,
    width: '100%',
    padding: "10px 14px",
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
    backgroundColor: theme.palette.error.background,
  },
}));

function ErrorProvider(props) {
  const { error } = props;
  const classes = useStyles();

  if (error === null) return null;

  return (
    <Box
      border={ 1 }
      borderRadius={ 3 }
      className={ classes.box }
    >
      <Typography variant='body1' align='center'>
        { error }
      </Typography>
    </Box>
  );
}

function mapState(state) {
  const { error } = state.auth;
  return { error };
}

export default connect(
  mapState,
)(ErrorProvider);
