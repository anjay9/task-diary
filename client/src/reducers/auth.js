import {
  AUTH_CHANGE_INPUT,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  waiting: false,
  error: null,
  email: '',
  password: '',
  confirmPassword: '',
};

export default (state = initialState, action) => {
  switch (action.type) {

    case AUTH_CHANGE_INPUT:
      return {
        ...state,
        [action.stateName]: action.newValue,
      };

    case AUTH_START:
      return {
        ...state,
        waiting: true,
      };

    case AUTH_SUCCESS:
      return { ...initialState };

    case AUTH_FAILURE:
      return {
        ...initialState,
        error: action.error,
      };

    default:
      return state;

  }
}
