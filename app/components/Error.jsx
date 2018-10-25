'use strict';
import React from 'react';
import Paper from '@material-ui/core/Paper';

const Error = (props) => {
  const { status, summoner, title } = props;
  let errMessage = `Error loading games for ${summoner}`;
  if (status === 404) errMessage = `Invalid summoner name ${summoner}`;
    return (
      <div id="games">
        <Paper
          style={{backgroundColor: '#939494'}}
          zDepth={4} >
          <h3 style={title}>{errMessage}</h3>
        </Paper>
      </div>
    );
};

export default Error;
