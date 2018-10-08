'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Game from './Game';

/* -----------------    COMPONENT     ------------------ */

class Games extends React.Component {
  render() {
    const games = this.props.games;
    console.log(games);
    return (
      <div id="games">games:
        <Game props={games} />
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ games }) => ({ games });

const mapDispatch = null;

export default connect(mapStateToProps, mapDispatch)(Games);
