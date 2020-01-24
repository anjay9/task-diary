import {
  OPEN_TASK_IN_TASK_EDITOR,

  TASK_EDITOR_INPUT_OPEN,
  TASK_EDITOR_INPUT_CLOSE,
  TASK_EDITOR_INPUT_SET,
  TASK_EDITOR_RESET,

  TASK_EDITOR_APPLY_START,
  TASK_EDITOR_APPLY_SUCCESS,
  TASK_EDITOR_APPLY_FAILURE,

  TASK_EDITOR_DELETE_START,
  TASK_EDITOR_DELETE_SUCCESS,
  TASK_EDITOR_DELETE_FAILURE,

  TYPE_EDITOR_APPLY_SUCCESS,
  TYPE_EDITOR_DELETE_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  waiting: false,
  taskId: null,

  typeSelectorIsOpened: false,
  typeId: '',
  startPickerIsOpened: false,
  start: null,
  endPickerIsOpened: false,
  end: null,

  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case OPEN_TASK_IN_TASK_EDITOR:
      return {
        ...state,
        taskId: action.taskId,
        typeId: action.typeId,
        start: action.start,
        end: action.end,
      };

    case TASK_EDITOR_INPUT_OPEN:
      return {
        ...state,
        [action.stateName]: true,
      };

    case TASK_EDITOR_INPUT_CLOSE:
      return {
        ...state,
        [action.stateName]: false,
      };

    case TASK_EDITOR_INPUT_SET:
      return {
        ...state,
        [action.stateName]: action.newValue,
      };

    case TASK_EDITOR_APPLY_START:
    case TASK_EDITOR_DELETE_START:
      return {
        ...state,
        waiting: true,
      };

    case TASK_EDITOR_APPLY_FAILURE:
    case TASK_EDITOR_DELETE_FAILURE:
      return {
        ...state,
        waiting: false,
        error: action.error,
      };

    case TASK_EDITOR_APPLY_SUCCESS:
    case TASK_EDITOR_DELETE_SUCCESS:
    case TASK_EDITOR_RESET:
    case TYPE_EDITOR_APPLY_SUCCESS:
    case TYPE_EDITOR_DELETE_SUCCESS:
      return { ...initialState };

    default:
      return state;

  }
}
