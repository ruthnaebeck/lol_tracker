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
    let title = 'Loading...';
    if (games.length) {
      title = `Last ${games.length} games for ${games[0].summonerName}`;
    }
    return (
      <div id="games">
        <Paper
          style={{backgroundColor: '#939494'}}
          zDepth={4} >
          <h3 style={styles}>{title}</h3>
        </Paper>
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
