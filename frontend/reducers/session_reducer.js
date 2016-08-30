import { SESSION_CONSTANTS } from '../actions/session_actions';
import { merge } from 'lodash';

let defaultState = {currentUser: null, errors: []}

const SessionReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case SESSION_CONSTANTS.RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.user;
      newState.errors = [];
      return newState;
    case SESSION_CONSTANTS.RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    case SESSION_CONSTANTS.LOGOUT:
      newState = merge({}, state);
      newState.currentUser = null;
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
