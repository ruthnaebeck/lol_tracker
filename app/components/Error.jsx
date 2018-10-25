'use strict';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/game';

const Error = (props) => {
  const { classes, status, summoner, title } = props;
  let errMessage = `Error loading games for ${summoner}`;
  if (status === 404) errMessage = `Invalid summoner name ${summoner}`;
    return (
      <div id="games">
        <Paper
          style={{backgroundColor: '#939494'}}
          zDepth={4} >
          <h3 style={title}>{errMessage}</h3>
        </Paper>
        <Paper className={ classes.root } >
          <Typography>Please try your search again.</Typography>
        </Paper>
      </div>
    );
};

export default withStyles(styles)(Error);
