import React from 'react';

const Greeting = ({ currentUser, errors, logout}) => {
  let welcome;
  if (currentUser) {
    welcome = (
      <div>
        <h1>Hello {currentUser.username}</h1>
        <button onClick={logout} >Logout</button>
      </div>
    );
  } else {
    welcome = (
      <div>
        <h1>Welcome</h1>
        <a href="/#/signup">Signup</a>
        <a href="/#/login">Login</a>
      </div>
    );
  }
  let errorComponent = errors.map((error) => (
    <h4>{error}</h4>
  ));
  return (
    <div>
      <div>{errorComponent}</div>
      {welcome}
    </div>
  );

};

export default Greeting;
