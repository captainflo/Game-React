import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Slider from 'react-slick';
import ScrollAnimation from 'react-animate-on-scroll';

class GameSeries extends React.Component {
  componentDidMount() {
    this.props.GetScreenshotsGame(this.props.id);
  }

  renderScreen = () => {
    if (this.props.gamescreenshots) {
      return this.props.gamescreenshots.map(screen => {
        return (
          <ScrollAnimation
            key={screen.id}
            animateOnce={true}
            animateIn="fadeInRight"
          >
            <div className="div-img">
              <img
                className="image-slider"
                src={screen.image}
                alt={screen.id}
              />
            </div>
          </ScrollAnimation>
        );
      });
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
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="box-slider-screen">
        <Slider {...settings}>{this.renderScreen()} </Slider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gamescreenshots: state.games.screenshots.results
  };
}
export default connect(mapStateToProps, actions)(GameSeries);
