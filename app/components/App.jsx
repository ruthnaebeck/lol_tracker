import React from 'react';
import AppBar from './AppBar';

const App = ({ children }) => (
  <div id="app">
    <AppBar />
    { children }
  </div>
);

export default App;
