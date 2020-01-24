import {
  TYPE_EDITOR_CHANGE_INPUT,
  OPEN_TYPE_EDITOR,
  OPEN_TYPE_IN_TYPE_EDITOR,
  TYPE_EDITOR_RESET,
} from '../../constants/actionTypes';

export const changeInput = (stateName, newValue) => dispatch =>
  dispatch({ type: TYPE_EDITOR_CHANGE_INPUT, stateName, newValue });

export const openNew = () => dispatch =>
  dispatch({ type: OPEN_TYPE_EDITOR });

export const openExisting = (typeId, name, colorId) => dispatch =>
  dispatch({ type: OPEN_TYPE_IN_TYPE_EDITOR, typeId, name, colorId });

export const close = () => dispatch =>
  dispatch({ type: TYPE_EDITOR_RESET });

export { default as apply } from './apply';

export { default as deleteType } from './deleteType';
