'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Summoner from './components/Summoner';

import { fetchSummoner } from './reducers/summoner';

/* -----------------    COMPONENT     ------------------ */

const Routes = ({ onSummonerEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route
          path="summoner/:name" component={ Summoner }
          onEnter={ onSummonerEnter } />
    </Route>
    <Route path="*" component={Home} />
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = null;

const mapDispatch = dispatch => ({
  onSummonerEnter: (nextRouterState) => {
    const summonerName = nextRouterState.params.name;
    dispatch(fetchSummoner(summonerName));
  }
});

export default connect(mapStateToProps, mapDispatch)(Routes);
