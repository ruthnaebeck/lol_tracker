'use strict';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/game';

export const Error = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Typography>Error - Please try again</Typography>
    </Paper>
  );
};

export default withStyles(styles)(Error);
