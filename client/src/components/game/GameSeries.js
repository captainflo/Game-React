import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import ScrollAnimation from 'react-animate-on-scroll';

class GameSeries extends React.Component {
  componentDidMount() {
    console.log(this.props.id);
  }

  render() {
    return <div>Game Series</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    gameDetails: state.games.gameDetails
  };
}
export default connect(mapStateToProps, actions)(GameSeries);
