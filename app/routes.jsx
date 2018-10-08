'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Games from './components/Games';

import { fetchGames } from './reducers/games';

/* -----------------    COMPONENT     ------------------ */

const Routes = ({ onGamesEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route
          path="summoner/:name" component={ Games }
          onEnter={ onGamesEnter } />
    </Route>
    <Route path="*" component={Home} />
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = null;

const mapDispatch = dispatch => ({
  onGamesEnter: (nextRouterState) => {
    const summonerName = nextRouterState.params.name;
    dispatch(fetchGames(summonerName));
  }
});

export default connect(mapStateToProps, mapDispatch)(Routes);
