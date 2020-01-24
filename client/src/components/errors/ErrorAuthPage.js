import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Wrapper from './Wrapper';
import logout from '../../actions/logout';

function ErrorAuthPage(props) {
  const { logout } = props;
  useEffect(() => {
    logout()
  }, []);

  return (
    <Wrapper
      text='You are not authenticated'
      buttonText='Take me to login page'
      buttonUrl='/login'
    />
  );
}

export default connect(
  null,
  { logout },
)(ErrorAuthPage);
