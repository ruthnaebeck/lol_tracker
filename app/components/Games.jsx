'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Game from './Game';
import styles from '../styles/games';

/* -----------------    COMPONENT     ------------------ */

class Games extends React.Component {
  render() {
    const games = this.props.games;
    let summoner = this.props.params.name;
    let newSum = true;
    if (games.length) newSum = games[0].summonerName === summoner;
    let title = `Loading games for ${summoner}`;
    if (games.length && newSum && games[0].apiError) {
      title = `${summoner} is an invalid summoner name`;
    } else if (games.length && newSum) {
      title = `Last ${games.length} games for ${summoner}`;
    }
    return (
      <div id="games">
        <Paper
          style={{backgroundColor: '#939494'}}
          zDepth={4} >
          <h3 style={styles}>{title}</h3>
        </Paper>
        {(games.map(game =>
          <div key={game.gameId}><Game match={game} /></div>))}
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ games }) => ({ games });

const mapDispatch = null;

export default connect(mapStateToProps, mapDispatch)(Games);
