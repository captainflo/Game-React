import React from 'react';
import SearchBar from '../utils/SearchBar';
import Results from '../utils/Results';
import { connect } from 'react-redux';
import * as actions from '../actions';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../css/Slider.css';

class Slider extends React.Component {
  state = {
    class: 'hidden'
  };
  componentDidMount() {
    var elems = document.querySelectorAll('.slider');
    M.Slider.init(elems, { interval: 2000, indicators: false, height: 700 });
  }

  onSubmit = formValues => {
    this.props.GetGamesByName(formValues.game);
    this.props.GetGameByName(formValues.game);
    this.setState({ class: '' });
  };

  loader = () => {
    return (
      <div className={`${this.state.class}`}>
        <div className={`preloader-wrapper big active`}>
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
      </div>
    );
  };

  render() {
    return (
      <div className="slider">
        <ul className="slides">
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/banner.jpg'}
              alt="banner"
            />
            <div className="caption center-align">
              <h3>Wiki Game</h3>
              <h5 className="light grey-text text-lighten-3">All The Game!</h5>
              <SearchBar onSubmit={this.onSubmit} />
              <div>
                {this.props.errorMessage ? this.props.errorMessage : ''}
              </div>
              <div>
                {!this.props.games &&
                !this.props.games &&
                !this.props.errorMessage
                  ? this.loader()
                  : ''}
              </div>
              {this.props.games ? (
                <Results
                  gameResult={this.props.game}
                  games={this.props.games}
                />
              ) : (
                ''
              )}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    game: state.games.gameDetails,
    games: state.games.allGames.results,
    errorMessage: state.games.errorMessage
  };
}
export default connect(mapStateToProps, actions)(Slider);
