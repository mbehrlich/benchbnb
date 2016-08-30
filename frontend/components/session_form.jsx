import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.processForm(user);
    this.props.router.push("/");
  }

  updateUsername(event) {
    this.setState({username: event.target.value});
  }

  updatePassword(event) {
    this.setState({password: event.target.value});
  }

  render() {
    let header = (this.props.formType === "/signup" ? (<h1>Sign up</h1>) : (<h1>Log in</h1>));
    let errors = this.props.errors.map((error) => {
      return (<li>{error}</li>);
    });
    return (
      <div>
        <ul>
          { errors }
        </ul>
        {header}
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.updateUsername} />
          </label>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.updatePassword} />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
