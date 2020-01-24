import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { openNew } from '../../../../../../actions/typeEditor';

function OpenTypeEditorButton(props) {
  const { openNew } = props;
  return (
    <Button
      fullWidth
      variant='contained'
      color='primary'
      onClick={ openNew }
    >
      Create task type
    </Button>
  );
}

export default connect(
  null,
  { openNew },
)(OpenTypeEditorButton);
