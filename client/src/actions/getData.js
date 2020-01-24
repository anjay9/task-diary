import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from '../constants/actionTypes';
import axios from 'axios';
import handleResponse from './handleResponse';

const success = GET_DATA_SUCCESS;

function getPageDate(option, dateObj) {
  const pageDate = localStorage.getItem('pageDate');
  if (option) {
    const date = new Date(pageDate);
    if (option === 'next') return date.setDate(date.getDate() + 1);
    if (option === 'previous') return date.setDate(date.getDate() - 1);
    if (option === 'pass-date') return dateObj;
  }
  if (!pageDate) return new Date().setHours(0, 0, 0, 0);
  return pageDate;
}

export default (option, dateObj) => dispatch => {
  dispatch({ type: GET_DATA_REQUEST });
  const idToken = localStorage.getItem('idToken');
  const pageDate = getPageDate(option, dateObj);
  return axios({
    method: 'POST',
    url: '/private/get-data',
    headers: { Authorization: `Bearer ${ idToken }` },
    data: { pageDate },
  })
    .then(res => dispatch(handleResponse(res, success)));
}
