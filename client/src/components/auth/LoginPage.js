import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AuthProvider from './AuthProvider';
import logout from '../../actions/logout';
import { login } from '../../actions/auth';

function LoginPage(props) {
  const { email, password, logout, login } = props;

  useEffect(() => {
    logout();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <AuthProvider
      title='Login'
      submitText='Log in'
      onSubmit={ handleSubmit }
      link2={{ text: 'Create account', href: '/register' }}
    />
  );
}

//link1={{ text: 'Forgot password', href: '#' }}

function mapState(state) {
  const { email, password } = state.auth;
  return { email, password };
}

export default connect(
  mapState,
  { logout, login },
)(LoginPage);
