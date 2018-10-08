'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    position: 'relative',
    backgroundColor: '#0c2124',
  },
  cardContent: {
    padding: 0,
  },
  media: {
    height: 0,
    paddingTop: '42%',
    'background-position': 'top'
  }
};

function Home(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <CardMedia
          className={classes.media}
          image="/images/lol_home.jpg" />
      </CardContent>
    </Card>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

