'use strict';
import React from 'react';
import { connect } from 'react-redux';

export const Game = (props) => {
  const match = props.props;
  let creep = match.game.stats.totalMinionsKilled + match.game.stats.neutralMinionsKilled;
  let duration = match.gameDuration / 60;
  return (
    <div>GameId: {match.gameId}
      <ul>
        <li>Game Length: {duration}</li>
        <li>Spell 1: {match.game.spell1Id}</li>
        <li>Spell 2: {match.game.spell2Id}</li>
        <li>Champion: {match.game.championId}</li>
        <li>Champion Level: {match.game.stats.champLevel}</li>
        <li>KDA: {match.game.stats.kills} / {match.game.stats.deaths} / {match.game.stats.assists}</li>
        <li>Items</li>
        <li>Total Creep: {creep}</li>
        <li>Creep per minute: {creep / duration}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Game);
