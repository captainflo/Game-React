import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Slider from 'react-slick';

class GameVideo extends React.Component {
  componentDidMount() {
    this.props.GetVideoGame(this.props.id);
  }

  renderVideo = () => {
    if (this.props.gameVideos) {
      return this.props.gameVideos.map(video => {
        return (
          <div key={video.id} className="div-img">
            <a
              href={`https://www.youtube.com/watch?v=${video.external_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="image-slider-simular"
                src={video.thumbnails.maxresdefault.url}
                alt={video.id}
              />
            </a>
          </div>
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
    const settings = {
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
        {this.props.gameVideos && <h5>Trailler</h5>}
        <div className="box-slider-screen">
          <Slider {...settings}>{this.renderVideo()} </Slider>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    gameVideos: state.games.gameVideo.results
  };
}
export default connect(mapStateToProps, actions)(GameVideo);
