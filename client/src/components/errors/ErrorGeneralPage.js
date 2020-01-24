import React from 'react';

import Wrapper from './Wrapper';

function ErrorAuthPage(props) {
  return (
    <Wrapper
      text='An error occurred'
      buttonText='Take me to my tasks'
      buttonUrl='/'
    />
  );
}

export default ErrorAuthPage;
