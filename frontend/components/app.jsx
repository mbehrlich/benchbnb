import React from 'react';
import GreetingContainer from './greeting_container';

const App = ({children}) => (
  <div>
    <GreetingContainer />
    <h1>Bench BnB</h1>
    {children}
  </div>
);

export default App;
