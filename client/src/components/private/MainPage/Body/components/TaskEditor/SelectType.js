import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, OutlinedInput, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';

import { openInput, closeInput, setInput } from '../../../../../../actions/taskEditor';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.margin.item,
    marginBottom: theme.margin.item,
  },
  label: {
    color: theme.palette.label.main,
  },
  notchedOutline: {
    borderColor: theme.palette.outline.main,
  },
}));

function SelectType(props) {
  const {
    types,
    typeSelectorIsOpened,
    typeId,
    openInput,
    closeInput,
    setInput,
  } = props;
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function findTypeColor() {
    if (typeId) {
      for (let i = 0; i < types.length; i++) {
        if (types[i].id === typeId) {
          return types[i].colorHex;
        }
      }
    }
    return null;
  }

  function renderMenuItems() {
    if (types) {

      return types.map((type, index) =>
        <MenuItem
          key={ index }
          value={ type.id }
          style={{ color: type.colorHex }}
        >
          { type.name }
        </MenuItem>
      );
    }
    return null;
  }

  return (
    <FormControl
      fullWidth
      variant='outlined'
      className={ classes.formControl }
    >
      <InputLabel
        ref={ inputLabel }
        id='type-selector-label-id'
        className={ classes.label }
      >
        Task type
      </InputLabel>

      <Select
        labelId='type-selector-label-id'
        value={ typeId }
        style={{ color: findTypeColor() }}
        open={ typeSelectorIsOpened }
        onOpen={ (types && types.length > 0) ? () => openInput('typeSelectorIsOpened') : null }
        onClose={ () => closeInput('typeSelectorIsOpened') }
        onChange={ event => setInput('typeId', event.target.value) }
        input={
          <OutlinedInput
            labelWidth={ labelWidth }
            classes={{ notchedOutline: classes.notchedOutline }}
          />
        }
      >
        { renderMenuItems() }
      </Select>
    </FormControl>
  );
}

function mapState(state) {
  const { types } = state.types;
  const { typeSelectorIsOpened, typeId } = state.taskEditor;
  return { types, typeSelectorIsOpened, typeId };
}

export default connect(
  mapState,
  { openInput, closeInput, setInput },
)(SelectType);
