'use strict';
import React from 'react';
import { browserHistory, Link } from 'react-router';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../styles/appbar';

class SearchAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  keyPressHandler(evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      browserHistory.push(`/summoner/${evt.target.value}`);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              League of Legends Stats Tracker
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Summoner"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onKeyPress={this.keyPressHandler}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);
