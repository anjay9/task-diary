import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../contants/actionTypes';
import { authService } from '../services/authService';
import { history } from '../helpers/history';
import { alertActions } from './';

const request = (user) => {
  return { type: LOGIN_REQUEST, user };
}
const success = (user) => {
  return { type: LOGIN_SUCCESS, user };
}
const failure = (error) => {
  return { type: LOGIN_FAILURE, error };
}

export const login = (email, password) => dispatch => {
  dispatch(request({ email }));
  userService.login(email, password)
    .then(
      user => {
        dispatch(success(user));
        history.push('/');
      },
      error => {
        dipatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
}
