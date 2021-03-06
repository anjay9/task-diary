import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  error: {
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

  if (!error) return null;

  return (
    <div className={ classes.error }>
      <Typography variant='body1' align='center'>
        { error }
      </Typography>
    </div>
  );
}

function mapState(state) {
  const { error } = state.typeEditor;
  return { error };
}

export default connect(
  mapState,
)(ErrorProvider);
