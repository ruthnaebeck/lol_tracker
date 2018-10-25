'use strict';
import React from 'react';
import Paper from '@material-ui/core/Paper';

const Pending = (props) => {
  const { summoner, title } = props;
    return (
      <div id="games">
        <Paper
          style={{backgroundColor: '#939494'}}
          zDepth={4} >
          <h3 style={title}>Loading games for {summoner}</h3>
        </Paper>
        <Paper
          style={{backgroundColor: 'white'}}
          zDepth={4} >
          <img src="/images/lol_pending.gif" />
        </Paper>
      </div>
    );
};

export default Pending;
