import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StarRatingComponent from 'react-star-rating-component';
import ScrollAnimation from 'react-animate-on-scroll';
import Platforms from './Platforms';

class GameContent extends React.Component {
  renderContent = () => {
    if (this.props.gameDetails) {
      const { gameDetails } = this.props;
      return (
        <ScrollAnimation animateOnce={true} animateIn="fadeInUp">
          <div className="box-star right">
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
          <a
            href={gameDetails.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-safari"></i> Offical Website
          </a>
          <p>
            <i className="fas fa-calendar-day"></i> {gameDetails.released}
          </p>
          <div className="row">
            <div className="col m4 s12">
              <h6>Platforms</h6>
              {gameDetails &&
                gameDetails.platforms.map(platform => {
                  return (
                    <Platforms
                      key={platform.platform.id}
                      name={platform.platform.name}
                    />
                  );
                })}
            </div>
            <div className="col m4 s12">
              <h6>Genres</h6>
              {gameDetails &&
                gameDetails.genres.map(genre => {
                  return <div key={genre.id}>{genre.name}</div>;
                })}
            </div>
            <div className="col m4 s12">
              <h6>Developers</h6>
              {gameDetails &&
                gameDetails.developers.map(dev => {
                  return <div key={dev.id}>{dev.name}</div>;
                })}
            </div>
          </div>
          <p>{gameDetails.description_raw}</p>
          <div>
            #Tags:{' '}
            {gameDetails &&
              gameDetails.tags.map(tag => {
                return <span key={tag.id}>{tag.name}, </span>;
              })}
          </div>
        </ScrollAnimation>
      );
    } else {
      return (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    gameDetails: state.games.gameDetails
  };
}
export default connect(mapStateToProps, actions)(GameContent);
