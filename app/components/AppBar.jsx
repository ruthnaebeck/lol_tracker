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
  state = {
    input: ''
  }

  onChangeHandler = (evt) => {
    this.setState({ input: evt.target.value });
  }

  keyPressHandler = (evt) => {
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
            <Typography className={classes.title} variant="h6" noWrap>
              <Link className={classes.link} to="/">League of Legends Stats Tracker</Link>
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
                onChange={this.onChangeHandler}
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
