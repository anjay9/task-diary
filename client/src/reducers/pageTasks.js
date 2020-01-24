import {
  GET_DATA_SUCCESS,
  TYPE_EDITOR_APPLY_SUCCESS,
  TYPE_EDITOR_DELETE_SUCCESS,
  TASK_EDITOR_APPLY_SUCCESS,
  TASK_EDITOR_DELETE_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  pageTasks: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_DATA_SUCCESS:
    case TYPE_EDITOR_APPLY_SUCCESS:
    case TYPE_EDITOR_DELETE_SUCCESS:
    case TASK_EDITOR_APPLY_SUCCESS:
    case TASK_EDITOR_DELETE_SUCCESS:
      return {
        ...state,
        pageTasks: action.pageTasks,
      };

    default:
      return state;

  }
}
