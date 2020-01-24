import {
  TYPE_EDITOR_CHANGE_INPUT,

  OPEN_TYPE_EDITOR,
  OPEN_TYPE_IN_TYPE_EDITOR,
  TYPE_EDITOR_RESET,

  TYPE_EDITOR_APPLY_START,
  TYPE_EDITOR_APPLY_SUCCESS,
  TYPE_EDITOR_APPLY_FAILURE,

  TYPE_EDITOR_DELETE_START,
  TYPE_EDITOR_DELETE_SUCCESS,
  TYPE_EDITOR_DELETE_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  waiting: false,
  isOpened: false,
  typeId: null,
  name: '',
  colorId: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case TYPE_EDITOR_CHANGE_INPUT:
      return {
        ...state,
        [action.stateName]: action.newValue,
      };

    case OPEN_TYPE_EDITOR:
      return {
        ...state,
        isOpened: true,
      };

    case OPEN_TYPE_IN_TYPE_EDITOR:
      return {
        ...state,
        isOpened: true,
        typeId: action.typeId,
        name: action.name,
        colorId: action.colorId,
      };

    case TYPE_EDITOR_APPLY_START:
    case TYPE_EDITOR_DELETE_START:
      return {
        ...state,
        waiting: true,
      };

    case TYPE_EDITOR_APPLY_FAILURE:
    case TYPE_EDITOR_DELETE_FAILURE:
      return {
        ...state,
        isOpened: true,
        waiting: false,
        error: action.error,
      };

    case TYPE_EDITOR_APPLY_SUCCESS:
    case TYPE_EDITOR_DELETE_SUCCESS:
    case TYPE_EDITOR_RESET:
      return { ...initialState };


    default:
      return state;

  }
}
