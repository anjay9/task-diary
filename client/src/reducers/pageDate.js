import {
  PAGE_DATE_OPEN,
  PAGE_DATE_CLOSE,

  GET_DATA_SUCCESS,
  TYPE_EDITOR_APPLY_SUCCESS,
  TYPE_EDITOR_DELETE_SUCCESS,
  TASK_EDITOR_APPLY_SUCCESS,
  TASK_EDITOR_DELETE_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  isOpened: false,
  splitDate: {
    day: null,
    month: null,
    year: null,
    dayOfWeek: null,
    monthName: null,
  },
};

/*function getReadableDate(dateString) {
  const date = new Date(dateString);
  const namesOfMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = namesOfMonths[ date.getMonth() ];
  const year = date.getFullYear();
  return `${ day } ${ month } ${ year }`;

  function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const namesOfDaysOfWeeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return namesOfDaysOfWeeks[ date.getDay() ];
  }
}*/

function getSplitDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return { day, month, year };
}

export default (state = initialState, action) => {
  switch (action.type) {

    case PAGE_DATE_OPEN:
      return {
        ...state,
        isOpened: true,
      };

    case PAGE_DATE_CLOSE:
      return {
        ...state,
        isOpened: false,
      };

    case GET_DATA_SUCCESS:
    case TYPE_EDITOR_APPLY_SUCCESS:
    case TYPE_EDITOR_DELETE_SUCCESS:
    case TASK_EDITOR_APPLY_SUCCESS:
    case TASK_EDITOR_DELETE_SUCCESS:
      const splitDate = getSplitDate(action.pageDate);
      return {
        ...state,
        splitDate,
      };



    default:
      return state;

  }
}
