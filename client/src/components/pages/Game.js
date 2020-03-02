import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SliderGame from '../game/SliderGame';
import SimularGame from '../game/SimularGame';
import GameScreenshots from '../game/GameScreenshots';
import GameContent from '../game/GameContent';
import GameVideo from '../game/GameVideo';
import '../css/Game.css';

class Game extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div key={this.props.match.params.id}>
        <SliderGame id={this.props.match.params.id} />
        <GameScreenshots id={this.props.match.params.id} />
        <div className="container">
          <GameContent />
          <GameVideo id={this.props.match.params.id} />
          <SimularGame id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameDetails: state.games.gameDetails
  };
}
export default connect(mapStateToProps, actions)(Game);
