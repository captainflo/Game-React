import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SliderGame from '../game/SliderGame';
import ScrollAnimation from 'react-animate-on-scroll';
import SimularGame from '../game/SimularGame';
import GameScreenshots from '../game/GameScreenshots';
import GameContent from '../game/GameContent';
import '../css/Game.css';

class Game extends React.Component {
  render() {
    return (
      <div>
        <SliderGame
          key={this.props.match.params.id}
          id={this.props.match.params.id}
        />
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight">
          <GameScreenshots
            key={this.props.match.params.id}
            id={this.props.match.params.id}
          />
        </ScrollAnimation>
        <div className="container">
          <ScrollAnimation animateOnce={true} animateIn="fadeInUp">
            <GameContent key={this.props.match.params.id} />
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="fadeInRight">
            <SimularGame
              key={this.props.match.params.id}
              id={this.props.match.params.id}
            />
          </ScrollAnimation>
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
