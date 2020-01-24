import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';

import { changeInput } from '../../../actions/auth';

const useStyles = makeStyles(theme => ({
  textField: {
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

function InputEmail(props) {
  const { email, changeInput } = props;
  const classes = useStyles();

  return (
    <TextField
      name='email'
      type='email'
      label='Email'
      variant='outlined'
      fullWidth
      autoFocus
      value={ email }
      onChange={ event => changeInput('email', event.target.value) }
      className={ classes.textField }
      InputLabelProps={{ className: classes.label }}
      InputProps={{
        classes: {
          notchedOutline: classes.notchedOutline,
        },
      }}
    />
  );
}

function mapState(state) {
  const { email } = state.auth;
  return { email };
}

export default connect(
  mapState,
  { changeInput },
)(InputEmail);
