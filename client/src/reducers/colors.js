import {
  GET_DATA_SUCCESS,
  TYPE_EDITOR_APPLY_SUCCESS,
  TYPE_EDITOR_DELETE_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  colors: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_DATA_SUCCESS:
    case TYPE_EDITOR_APPLY_SUCCESS:
    case TYPE_EDITOR_DELETE_SUCCESS:
      return {
        ...state,
        colors: action.colors,
      };

    default:
      return state;

  }
}
