import React from 'react';
import { connect } from 'react-redux';


/* -----------------    COMPONENT     ------------------ */

class Summoner extends React.Component {
  render(){
    return (
      <div id="summoner">Summoner</div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    summoner: state.summoner
  };
};

const mapDispatch = null;

export default connect(mapStateToProps, mapDispatch)(Summoner);
