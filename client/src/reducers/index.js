import { combineReducers } from 'redux';
import { RESET_STATES } from '../constants/actionTypes';

import mobilePages from './mobilePages';
import auth from './auth';
import colors from './colors';
import types from './types';
import pageDate from './pageDate';
import pageTasks from './pageTasks';
import taskEditor from './taskEditor';
import typeEditor from './typeEditor';

const appReducer = combineReducers({
  mobilePages,
  auth,
  colors,
  types,
  pageDate,
  pageTasks,
  taskEditor,
  typeEditor,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STATES) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;
