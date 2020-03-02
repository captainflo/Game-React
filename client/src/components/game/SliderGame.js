import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/Slider.css';

class SliderGame extends React.Component {
  componentDidMount() {
    this.props.GetGameById(this.props.id);
  }

  renderSilder = () => {
    if (this.props.gameDetails) {
      return (
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
          <div
            style={{
              backgroundImage: `url(${this.props.gameDetails.background_image})`
            }}
            className="box-slider"
          >
            {/* <ScrollAnimation
              animateOnce={true}
              delay={1000}
              animateIn="fadeInDown"
            > */}
            <div className="box-text">
              <h3>{this.props.gameDetails.name}</h3>
            </div>
            {/* </ScrollAnimation> */}
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
    return <div>{this.renderSilder()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    gameDetails: state.games.gameDetails
  };
}
export default connect(mapStateToProps, actions)(SliderGame);
