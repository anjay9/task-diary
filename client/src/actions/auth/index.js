import { AUTH_CHANGE_INPUT } from '../../constants/actionTypes';

export const changeInput = (stateName, newValue) => dispatch =>
  dispatch({ type: AUTH_CHANGE_INPUT, stateName, newValue });

export { default as login } from './login';

export { default as register } from './register';
