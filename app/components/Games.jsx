'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Game from './Game';

/* -----------------    COMPONENT     ------------------ */

class Games extends React.Component {
  render() {
    const games = this.props.games;
    let title = '';
    console.log(games);
    if (games.length) {
      title = `Last ${games.length} game(s) for ${games[0].summonerName}`;
    }
    return (
      <div id="games">{title}
        {games.map(game =>
          <div key={game.gameId}><Game props={game} /></div>)}
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ games }) => ({ games });

const mapDispatch = null;

export default connect(mapStateToProps, mapDispatch)(Games);
