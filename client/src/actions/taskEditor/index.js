import {
  OPEN_TASK_IN_TASK_EDITOR,
  TASK_EDITOR_INPUT_OPEN,
  TASK_EDITOR_INPUT_CLOSE,
  TASK_EDITOR_INPUT_SET,
  TASK_EDITOR_RESET,
} from '../../constants/actionTypes';

export const openTaskInTaskEditor = (taskId, typeId, start, end) => dispatch =>
  dispatch({ type: OPEN_TASK_IN_TASK_EDITOR, taskId, typeId, start, end });

export const openInput = stateName => dispatch =>
  dispatch({ type: TASK_EDITOR_INPUT_OPEN, stateName });

export const closeInput = stateName => dispatch =>
  dispatch({ type: TASK_EDITOR_INPUT_CLOSE, stateName });

export const setInput = (stateName, newValue) => dispatch =>
  dispatch({ type: TASK_EDITOR_INPUT_SET, stateName, newValue });

export const reset = () => dispatch =>
  dispatch({ type: TASK_EDITOR_RESET });

export { default as apply } from './apply';

export { default as deleteTask } from './deleteTask';
