import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../css/Slider.css';
import SearchBar from '../utils/SearchBar';

class Slider extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.slider');
    M.Slider.init(elems, { interval: 2000, indicators: false, height: 600 });
  }

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
              <SearchBar onSubmit={this.props.onSubmit} />
              <div>
                {this.props.errorMessage ? this.props.errorMessage : ''}
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Slider;
