import React from 'react';
import AppBar from './AppBar';

const App = ({ children }) => (
  <div id="main">
    <AppBar />
    { children }
  </div>
);

export default App;
