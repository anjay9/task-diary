import {
  PAGE_DATE_OPEN,
  PAGE_DATE_CLOSE,
} from '../constants/actionTypes';
import getData from './getData';

export const open = () => dispatch =>
  dispatch({ type: PAGE_DATE_OPEN });

export const close = () => dispatch =>
  dispatch({ type: PAGE_DATE_CLOSE });

export const change = newValue => dispatch => {
  dispatch({ type: PAGE_DATE_CLOSE });
  dispatch(getData('pass-date', newValue));
}
