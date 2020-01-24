import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress, Container } from '@material-ui/core';
import { connect } from 'react-redux';

import Title from './Title';
import ErrorProvider from './ErrorProvider';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import InputPasswordConfirm from './InputPasswordConfirm';
import SubmitButton from './SubmitButton';
import Links from './Links';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
  root: props => ({
    pointerEvents: (props.waiting) ? 'none' : null,
  }),
  panel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  inputs: {
    marginTop: -theme.margin.item + theme.margin.auth,
    marginBottom: -theme.margin.item + theme.margin.auth,
  },
  progress: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    height: theme.loadingHeight,
  },
}));

function AuthProvider(props) {
  const {
    registration,
    title,
    onSubmit,
    submitText,
    link1,
    link2,
    waiting,
  } = props;
  const classes = useStyles({ waiting });;

  return (
    <div className={ classes.root }>
      <Container component='main' maxWidth='xs'>
        <div className={ classes.panel }>
          <Title text={ title } />

          <form
            noValidate
            onSubmit={ onSubmit }
            className={ classes.form }
          >
            <div className={ classes.inputs }>
              <ErrorProvider />
              <InputEmail />
              <InputPassword adornment={ (registration) ? true : false } />
              { (registration) ? <InputPasswordConfirm /> : null }
            </div>

            <SubmitButton text={ submitText } />

            <Links link1={ link1 } link2={ link2 } />
          </form>
        </div>
        <Copyright />
      </Container>
      { (waiting) ? <LinearProgress className={ classes.progress } /> : null }
    </div>
  );
}

function mapState(state) {
  const { waiting } = state.auth;
  return { waiting };
}

export default connect(
  mapState,
)(AuthProvider);
