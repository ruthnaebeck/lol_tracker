import React from 'react';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

class Summoner extends React.Component {
  render() {
    const summoner = this.props.summoner;
    console.log(summoner);
    return (
      <div id="summoner">Summoner - {summoner.name} </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ summoner }) => ({ summoner });

const mapDispatch = null;

export default connect(mapStateToProps, mapDispatch)(Summoner);
