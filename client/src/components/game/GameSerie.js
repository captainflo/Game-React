import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Slider from 'react-slick';
import ScrollAnimation from 'react-animate-on-scroll';

class GameSeries extends React.Component {
  componentDidMount() {
    this.props.GetSerieGame(this.props.id);
  }

  renderScreen = () => {
    if (this.props.gameSeries) {
      return this.props.gameSeries.map(game => {
        return (
          <ScrollAnimation
            key={game.id}
            animateOnce={true}
            animateIn="fadeInRight"
          >
            <Link to={`/game/${game.id}`}>
              <div className="div-img">
                <img
                  className="image-slider-simular"
                  src={game.background_image}
                  alt={game.id}
                />
                <h6 className="center white-text">{game.name}</h6>
              </div>
            </Link>
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
      <div>
        {this.props.gameSeries ? <h5>Game Serie</h5> : ''}
        <div className="box-slider-screen">
          <Slider {...settings}>{this.renderScreen()} </Slider>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    gameSeries: state.games.gameSerie.results
  };
}
export default connect(mapStateToProps, actions)(GameSeries);
