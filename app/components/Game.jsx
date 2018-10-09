'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { findChampion, findItems, findSpells } from '../data/parse';

export const Game = (props) => {
  const match = props.props;
  const game = match.game;
  const stats = game.stats;
  const champion = findChampion(game.championId);
  const spells = findSpells([game.spell1Id, game.spell2Id]);
  const gameItems = findItems([stats.item0, stats.item1, stats.item2, stats.item3, stats.item4, stats.item5, stats.item6]);
  let creep = stats.totalMinionsKilled + stats.neutralMinionsKilled;
  let duration = match.gameDuration / 60;
  return (
    <Paper>
      <div>GameId: {match.gameId}
        <ul>
          <li>Game Length: {duration}</li>
          <li>Champion: {champion.name}</li>
          <li>Champion Level: {stats.champLevel}</li>
          <li>Spells:
            <ul>
              {spells.map(item =>
              <li key={item.id}>{item.name}</li>)}
            </ul>
          </li>
          <li>KDA: {stats.kills} / {stats.deaths} / {stats.assists}</li>
          <li>Items:
            <ul>
              {gameItems.map(item =>
              <li key={item.id}>{item.name}</li>)}
            </ul>
          </li>
          <li>Total Creep: {creep}</li>
          <li>Creep per minute: {creep / duration}</li>
        </ul>
      </div>
    </Paper>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Game);
