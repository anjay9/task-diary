import {
  MOBILE_WINDOWS_SWITCH_TO_TASK_EDITOR,
  MOBILE_WINDOWS_SWITCH_TO_TASK_LIST,
  MOBILE_WINDOWS_SWITCH_TO_SETTINGS,

  TASK_EDITOR_RESET,
} from '../constants/actionTypes';

export const switchToTaskEditor = currentMobilePage => dispatch =>
  dispatch({ type: MOBILE_WINDOWS_SWITCH_TO_TASK_EDITOR });

export const switchToTaskList = currentMobilePage => dispatch => {
  dispatch({ type: MOBILE_WINDOWS_SWITCH_TO_TASK_LIST });
  if (currentMobilePage === 'task-editor') {
    dispatch({ type: TASK_EDITOR_RESET });
  }
}

export const switchToSettings = currentMobilePage => dispatch => {
  dispatch({ type: MOBILE_WINDOWS_SWITCH_TO_SETTINGS });
  if (currentMobilePage === 'task-editor') {
    dispatch({ type: TASK_EDITOR_RESET });
  }
}
