import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Slider from 'react-slick';

class SimularGame extends React.Component {
  componentDidMount() {
    this.props.GetSimularGame(this.props.id);
  }

  renderScreen = () => {
    if (this.props.simularGames) {
      return this.props.simularGames.map(simular => {
        return (
          <Link key={simular.id} to={`/game/${simular.id}`}>
            <div className="div-img">
              <img
                className="image-slider-simular"
                src={simular.background_image}
                alt={simular.id}
              />
              <h6 className="center">{simular.name}</h6>
            </div>
          </Link>
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
      slidesToShow: 5,
      slidesToScroll: 5,
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
        {this.props.simularGames && <h5>Simular Games</h5>}

        {this.props.title && <p>{this.props.title}</p>}
        <div className="box-slider-screen">
          <Slider {...settings}>{this.renderScreen()} </Slider>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    simularGames: state.games.simularGames.results,
    title: state.games.simularGames.seo_text
  };
}
export default connect(mapStateToProps, actions)(SimularGame);
