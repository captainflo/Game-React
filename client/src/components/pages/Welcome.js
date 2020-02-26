import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/Welcome.css';
import Slider from '../utils/Slider';
import Footer from '../utils/Footer';

class Welcome extends React.Component {
  onSubmit = formValues => {
    this.props.GetGameByName(formValues.game, id =>
      this.props.history.push(`/game/${id}`)
    );
  };

  render() {
    return (
      <div>
        <Slider
          onSubmit={this.onSubmit}
          errorMessage={this.props.errorMessage}
        />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
    gameDetails: state.games.gameDetails,
    errorMessage: state.games.errorMessage
  };
}
export default connect(mapStateToProps, actions)(Welcome);
