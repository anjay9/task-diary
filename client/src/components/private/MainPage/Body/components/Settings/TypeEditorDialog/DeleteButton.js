import React from 'react'
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { deleteType } from '../../../../../../../actions/typeEditor';

function DeleteButton(props) {
  const { waiting, typeId, deleteType } = props;

  return (
    <Button
      variant='contained'
      color='secondary'
      onClick={ (waiting) ? null : () => deleteType(typeId) }
    >
      Delete
    </Button>
  );
}

function mapState(state) {
  const { waiting, typeId } = state.typeEditor;
  return { waiting, typeId };
}

export default connect(
  mapState,
  { deleteType },
)(DeleteButton);
