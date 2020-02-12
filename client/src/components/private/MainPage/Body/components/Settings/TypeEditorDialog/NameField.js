import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, Tooltip } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import { connect } from 'react-redux';

import { changeInput } from '../../../../../../../actions/typeEditor';

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: theme.margin.item,
    marginBottom: theme.margin.item,
  },
  label: {
    color: theme.palette.label.main,
  },
  adornment: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  notchedOutline: {
    borderColor: theme.palette.outline.main,
  },
}));

function NameField(props) {
  const { waiting, name, changeInput } = props;
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      variant='outlined'
      className={ classes.textField }
      label='Name'
      InputLabelProps={{ className: classes.label }}
      InputProps={{ classes: { notchedOutline: classes.notchedOutline } }}
      onChange={ (waiting) ? null : event => changeInput('name', event.target.value) }
      value={ name }
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <Tooltip enterTouchDelay={ 0 } title={
              <Fragment>
                <div>Must contains 3-25 characters</div>
                <div>Can contain uppercases, lowercases and digits</div>
                <div>Single whitespaces can appear between other characters</div>
              </Fragment>
            }>
              <ErrorIcon className={ classes.adornment } />
            </Tooltip>
          </InputAdornment>
        )
      }}
    />
  );
}

function mapState(state) {
  const { waiting, name } = state.typeEditor;
  return { waiting, name };
}

export default connect(
  mapState,
  { changeInput },
)(NameField);
