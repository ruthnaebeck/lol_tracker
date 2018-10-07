'use strict';
import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div className="games">
        <h1>Stats</h1>
        <ul>
          <li>Game 1</li>
          <li>Game 2</li>
          <li>Game 3</li>
        </ul>
      </div>
    );
  }
}

// const mapStateToProps = null;
// const mapDispatch = null;

// export default connect(mapStateToProps, mapDispatch)(Home);

export default Home;
