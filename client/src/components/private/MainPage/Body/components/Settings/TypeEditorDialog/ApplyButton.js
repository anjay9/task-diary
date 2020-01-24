import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { apply } from '../../../../../../../actions/typeEditor';


function ApplyButton(props) {
  const { waiting, text, typeId, name, colorId, apply } = props;

  return (
    <Button
      variant='contained'
      color='primary'
      onClick={ (waiting) ? null : () => apply({ typeId, name, colorId }) }
    >
      { text }
    </Button>
  );
}

function mapState(state) {
  const { waiting, typeId, name, colorId } = state.typeEditor;
  return { waiting, typeId, name, colorId };
}

export default connect(
  mapState,
  { apply },
)(ApplyButton);
