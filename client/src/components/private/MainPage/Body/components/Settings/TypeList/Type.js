import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { openExisting } from '../../../../../../../actions/typeEditor';

const useStyles = makeStyles(theme => ({
  button: props => ({
    marginTop: theme.margin.smItem,
    marginBottom: theme.margin.smItem,
    textTransform: 'none',
    //borderColor: props.colorHex,
    borderColor: theme.palette.outline.main,
    //backgroundColor: props.colorHex + '07',
    padding: '3px 10px',
    minHeight: 0,
    minWidth: 0,
  }),
  buttonContainer: props => ({
    width: '100%',
    height: '100%',
    textAlign: 'left',
    color: props.colorHex,
    fontSize: 17,
    fontWeight: 400,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    //backgroundColor: 'pink',
  }),
}));

function Type(props) {
  const { id, name, colorId, colorHex, openExisting } = props;
  const classes = useStyles({ colorHex });

  function handleClick() {
    openExisting(id, name, colorId);
  }

  return (
    <Button
      fullWidth
      variant='outlined'
      className={ classes.button }
      onClick={ handleClick }
    >
      <div className={ classes.buttonContainer }>
        { name }
      </div>
    </Button>
  );
}

export default connect(
  null,
  { openExisting },
)(Type);
