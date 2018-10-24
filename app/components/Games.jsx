'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Pending from './Pending';
import Game from './Game';
import styles from '../styles/games';

/* -----------------    COMPONENT     ------------------ */

class Games extends React.Component {
  render() {
    const games = this.props.games.games;
    let pending = this.props.games.pending;
    let summoner = this.props.params.name;
    if (pending) return (<Pending summoner={summoner} title={styles.title} />);
    let title = `Last ${games.length} games for ${summoner}`;
    return (
      <div id="games">
        <Paper
          style={{backgroundColor: '#939494'}}
          zDepth={4} >
          <h3 style={styles.title}>{title}</h3>
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
