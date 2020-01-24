import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';

import { changeInput } from '../../../actions/auth';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.margin.item,
    marginBottom: theme.margin.item,
  },
  label: {
    color: theme.palette.label.main,
  },
  notchedOutline: {
    borderColor: theme.palette.outline.main,
  },
}));

function InputPasswordConfirm(props) {
  const { confirmPassword, changeInput } = props;
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      name='confirmPassword'
      type='password'
      label='Confirm password'
      variant='outlined'
      value={ confirmPassword }
      onChange={ event => changeInput('confirmPassword', event.target.value) }
      className={ classes.root }
      InputLabelProps={{ className: classes.label }}
      InputProps={{ classes: { notchedOutline: classes.notchedOutline } }}
    />
  );
}

function mapState(state) {
  const { confirmPassword } = state.auth;
  return { confirmPassword };
}

export default connect(
  mapState,
  { changeInput },
)(InputPasswordConfirm);
