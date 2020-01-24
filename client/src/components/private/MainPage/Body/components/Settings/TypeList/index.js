import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import Type from './Type';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: -theme.margin.item + theme.margin.main,
    marginBottom: -theme.margin.item,
  },
}));

function TypeList(props) {
  const { types } = props;
  const classes = useStyles();

  function renderContent() {
    if (Array.isArray(types)) {
      if (types.length === 0) {
        return (
          <Typography align='justify' variant='body1'>
            Currently, you have no task types. Create them using the button above.
          </Typography>
        );
      }
      return types.map((type, index) =>
        <Type
          key={ index }
          id={ type.id }
          name={ type.name }
          colorId={ type.colorId }
          colorHex={ type.colorHex }
        />
      );
    }
    else return null;
  }

  return (
    <div className={ classes.root }>
      { renderContent() }
    </div>
  );
}

function mapState(state) {
  const { types } = state.types;
  return { types };
}

export default connect(
  mapState,
)(TypeList);
