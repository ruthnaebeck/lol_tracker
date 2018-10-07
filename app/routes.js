import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';

const Routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

// const mapStateToProps = null;
// const mapDispatch = null;

// export default connect(mapStateToProps, mapDispatch)(Routes);

export default Routes;
