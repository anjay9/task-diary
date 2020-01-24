import {
  OPEN_TASK_IN_TASK_EDITOR,

  MOBILE_WINDOWS_SWITCH_TO_TASK_EDITOR,
  MOBILE_WINDOWS_SWITCH_TO_TASK_LIST,
  MOBILE_WINDOWS_SWITCH_TO_SETTINGS,
} from '../constants/actionTypes';

const initialState = {
  currentMobilePage: 'task-list',
};

export default (state = initialState, action) => {
  switch (action.type) {

    case OPEN_TASK_IN_TASK_EDITOR:
      return {
        ...state,
        currentMobilePage: 'task-editor',
      };

    case MOBILE_WINDOWS_SWITCH_TO_TASK_EDITOR:
      return {
        ...state,
        currentMobilePage: 'task-editor',
      };

    case MOBILE_WINDOWS_SWITCH_TO_TASK_LIST:
      return {
        ...state,
        currentMobilePage: 'task-list',
      };

    case MOBILE_WINDOWS_SWITCH_TO_SETTINGS:
      return {
        ...state,
        currentMobilePage: 'settings',
      };

    default:
      return state;

  }
}
