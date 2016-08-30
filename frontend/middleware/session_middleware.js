import { SESSION_CONSTANTS, receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { signup, login, logout } from '../util/session_api_util';

const SessionMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  let success;
  let error;
  switch (action.type) {
    case SESSION_CONSTANTS.LOGIN:
      success = (user) => dispatch(receiveCurrentUser(user));
      error = (errors) => dispatch(receiveErrors(errors));
      login(action.user, success, error);
      break;
    case SESSION_CONSTANTS.LOGOUT:
      success = () => next(action);
      error = (errors) => dispatch(receiveErrors(errors));
      logout(success, error);
      break;
    case SESSION_CONSTANTS.SIGNUP:
      success = (user) => dispatch(receiveCurrentUser(user));
      error = (errors) => dispatch(receiveErrors(errors));
      signup(action.user, success, error);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
