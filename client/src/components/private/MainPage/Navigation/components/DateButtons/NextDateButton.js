import React from 'react';
import { IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { connect } from 'react-redux';

import getData from '../../../../../../actions/getData';

function NextDateButton(props) {
  const { getData } = props;

  return (
    <IconButton
      color='inherit'
      aria-label='abc'
      onClick={ () => getData('next') }
    >
      <ArrowForwardIcon />
    </IconButton>
  );
}

export default connect(
  null,
  { getData },
)(NextDateButton);
