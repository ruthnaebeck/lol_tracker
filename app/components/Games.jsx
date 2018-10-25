'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Pending from './Pending';
import Error from './Error';
import Game from './Game';
import styles from '../styles/games';

/* -----------------    COMPONENT     ------------------ */

class Games extends React.Component {
  render() {
    const data = this.props.games;
    const games = data.games;
    let summoner = this.props.params.name;
    if (data.pending) return (<Pending summoner={summoner} title={styles.title} />);
    if (data.error) return (<Error summoner={summoner} title={styles.title} status={data.message.response.status} />);
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
