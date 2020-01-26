import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Tooltip,
} from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
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
  adornment: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  notchedOutline: {
    borderColor: theme.palette.outline.main,
  },
}));

function InputPassword(props) {
  const { adornment, password, changeInput } = props;
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl
      fullWidth
      variant='outlined'
      className={ classes.root }
    >
      <InputLabel
        ref={ inputLabel }
        id='type-selector-label-id'
        className={ classes.label }
      >
        Password
      </InputLabel>

      <OutlinedInput
        labelId='password-input-label'
        labelWidth={ labelWidth }
        name='password'
        type='password'
        value={ password }
        onChange={ event => changeInput('password', event.target.value) }
        endAdornment={
          (adornment)
            ? (
              <InputAdornment position='end'>
                <Tooltip enterTouchDelay={ 0 } title={
                  <Fragment>
                    <div>Must contains 8-30 characters</div>
                    <div>Must contains 1 digit</div>
                    <div>Must contains 1 lowercase</div>
                    <div>Must contains 1 uppercase</div>
                  </Fragment>
                }>
                  <ErrorIcon className={ classes.adornment } />
                </Tooltip>
              </InputAdornment>
            )
            : null
        }
        classes={{ notchedOutline: classes.notchedOutline }}
      />
    </FormControl>
  );
}

function mapState(state) {
  const { password } = state.auth;
  return { password };
}

export default connect(
  mapState,
  { changeInput },
)(InputPassword);
