import React from 'react';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { connect } from 'react-redux';

import getData from '../../../../../../actions/getData';

function PreviousDateButton(props) {
  const { getData } = props;

  return (
    <IconButton
      color='inherit'
      aria-label='abc'
      onClick={ () => getData('previous') }
    >
      <ArrowBackIcon />
    </IconButton>
  );
}

export default connect(
  null,
  { getData },
)(PreviousDateButton);
