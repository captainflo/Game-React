import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SliderGame from '../utils/SliderGame';
import ScrollAnimation from 'react-animate-on-scroll';
import GameSeries from '../game/GameSeries';
import StarRatingComponent from 'react-star-rating-component';
import '../css/Game.css';

class Game extends React.Component {
  componentDidMount() {
    this.props.GetGameById(this.props.match.params.id);
  }

  render() {
    const { gameDetails } = this.props;
    return (
      <div>
        <SliderGame game={gameDetails} />
        <ScrollAnimation animateOnce={true} animateIn="fadeInUp">
          <div className="container">
            <p>
              <i className="fas fa-calendar-day"></i> {gameDetails.released}
            </p>
            <a
              href={gameDetails.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-safari"></i> Offical Website
            </a>
            <div className="box-star">
              Raiting:
              <div className="star">
                <StarRatingComponent
                  name="star"
                  starCount={5}
                  value={Math.round(gameDetails.rating)}
                  editing={false}
                />
              </div>
            </div>
            <div>
              Developers
              {gameDetails &&
                gameDetails.developers.map(dev => {
                  return <li key={dev.id}>{dev.name}</li>;
                })}
            </div>
            <p>{gameDetails.description_raw}</p>
          </div>
        </ScrollAnimation>
        <GameSeries id={this.props.match.params.id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    gameDetails: state.games.gameDetails
  };
}
export default connect(mapStateToProps, actions)(Game);
