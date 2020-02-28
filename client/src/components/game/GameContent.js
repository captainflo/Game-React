import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StarRatingComponent from 'react-star-rating-component';

class GameContent extends React.Component {
  componentDidMount() {
    this.props.GetScreenshotsGame(this.props.id);
  }

  renderContent = () => {
    if (this.props.gameDetails) {
      const { gameDetails } = this.props;
      return (
        <div>
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
            Genres
            {gameDetails &&
              gameDetails.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
          </div>
          <div>
            Platforms
            {gameDetails &&
              gameDetails.platforms.map(platform => {
                return (
                  <li key={platform.platform.id}>{platform.platform.name}</li>
                );
              })}
          </div>
          <div>
            Developers
            {gameDetails &&
              gameDetails.developers.map(dev => {
                return <li key={dev.id}>{dev.name}</li>;
              })}
          </div>
          <p>{gameDetails.description_raw}</p>
          <div>
            #Tags:{' '}
            {gameDetails &&
              gameDetails.tags.map(tag => {
                return <span key={tag.id}>{tag.name}, </span>;
              })}
          </div>
        </div>
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

{
}
