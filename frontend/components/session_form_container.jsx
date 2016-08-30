import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: (state.session.currentUser ? true : false),
  errors: state.session.errors,
  formType: ownProps.route.path,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (ownProps.route.path === "/login" ? (user) => dispatch(login(user)) : (user) => dispatch(signup(user)))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
