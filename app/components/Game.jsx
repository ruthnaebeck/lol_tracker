'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { findChampion, findItems, findRunes, findSpells } from '../data/parse';
import styles from '../styles/game';

export const Game = (props) => {
  const { classes, match } = props;
  const game = match.game;
  const stats = game.stats;
  const champion = findChampion(game.championId);
  const spells = findSpells([game.spell1Id, game.spell2Id]);
  const gameItems = findItems(stats);
  const gameRunes = findRunes(stats);
  let imgUrl = 'http://ddragon.leagueoflegends.com/cdn/8.19.1/img/';
  let creep = stats.totalMinionsKilled + stats.neutralMinionsKilled;
  let duration = match.gameDuration / 60;
  return (
    <Paper className={classes.root}>
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase className={classes.champImg}>
            <img className={classes.champImg} src={`${imgUrl}champion/${champion.image.full}`} />
          </ButtonBase>
        </Grid>
        <Grid item xs={3} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography>{champion.name}</Typography>
              <Typography>Level {stats.champLevel}</Typography>
              <Typography>{Math.round(duration * 100) / 100} min</Typography>
              <Typography gutterBottom>{stats.win ? 'Victory' : 'Defeat'}</Typography>
              <Typography color="textSecondary">
                KDA: {stats.kills} / {stats.deaths} / {stats.assists}<br />
                Total Creep: {creep}<br />
                Creep per min: {Math.round((creep / duration) * 100) / 100}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={2} container direction="column">
            <Grid item xs>
              <Typography gutterBottom>Spells:</Typography>
              <Typography color="textSecondary">
                {spells.map(item =>
                  (<div key={item.id}>
                    <img className={classes.spellImg} src={`${imgUrl}spell/${item.image.full}`} /> {item.name}
                   </div>))}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} container direction="column">
            <Grid item xs>
                <Typography>Items:</Typography>
                <Typography color="textSecondary">
                  {gameItems.map(item =>
                    <div key={item.id}>{item.name}</div>)}
                </Typography>
            </Grid>
          </Grid>
          <Grid item xs={3} container direction="column">
            <Grid item xs>
              <Typography>Runes:</Typography>
              <Typography color="textSecondary">
                {gameRunes.map(rune =>
                  (<div key={rune.id}>
                    <img className={classes.runeImg} src={`/images/${rune.icon}`} /> {rune.name}
                   </div>))}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);
