import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  // login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
  // signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
