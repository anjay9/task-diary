import { AUTH_START, AUTH_FAILURE } from '../../constants/actionTypes';
import axios from 'axios';

import handleResponse from './handleResponse';

function verifyEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function verifyPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/;
  //const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,30})/;
  return regex.test(password);
}

function verifyAll(email, password, confirmPassword) {
  if (!verifyEmail(email)) return 'Must be a valid email';
  if (!verifyPassword(password)) return 'Password does not meet the requirements.';
  if (password !== confirmPassword) return 'Passwords do not match';
  return null;
}

export default (email, password, confirmPassword) => dispatch => {
  dispatch({ type: AUTH_START });

  const error = verifyAll(email, password, confirmPassword);
  if (error) return dispatch({ type: AUTH_FAILURE, error });

  return axios({
    method: 'POST',
    url: '/auth/register',
    data: { email, password },
  })
    .then(res => dispatch(handleResponse(res)));
}
