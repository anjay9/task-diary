import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import LabelledOutline from './LabelledOutline';
import { changeInput } from '../../../../../../../actions/typeEditor';

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: theme.margin.item,
    marginBottom: theme.margin.item,
  },
  parent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: -theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      margin: -theme.spacing(1),
    },
  },
  child: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
    margin: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1),
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picked: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    borderRadius: '100%',
    backgroundColor: 'white',
  },
}));

function ColorField(props) {
  const { colors, waiting, colorId, changeInput } = props;
  const classes = useStyles();

  const renderColors = colors.map((color, index) =>
    <div
      key={ index }
      className={ classes.child }
      style={{ background: color.hex }}
      onClick={ (waiting) ? null : () => changeInput('colorId', color.id) }
    >
      {
        (colorId === color.id)
          ? <div className={ classes.picked } />
          : null
      }
    </div>
  );

  return (
    <div className={ classes.wrapper }>
      <LabelledOutline
        id='colors-container-id'
        label='Color'
      >
        <div className={ classes.parent }>
          { (colors) ? renderColors : null }
        </div>
      </LabelledOutline>
    </div>
  );
}

function mapState(state) {
  const { colors } = state.colors;
  const { waiting, colorId } = state.typeEditor;
  return { colors, waiting, colorId };
}

export default connect(
  mapState,
  { changeInput },
)(ColorField);
