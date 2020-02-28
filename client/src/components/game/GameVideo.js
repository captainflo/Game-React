import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Iframe from 'react-iframe';

class GameVideo extends React.Component {
  componentDidMount() {
    this.props.GetVideoGame(this.props.id);
  }

  renderVideo = () => {
    if (this.props.gameVideos) {
      let video = this.props.gameVideos[0].external_id;
      console.log(video);
      return (
        <div>
          <h5>Trailler</h5>
          <div>
            <Iframe
              url={`http://www.youtube.com/embed/${video}`}
              id={video}
              className="video"
              display="initial"
              position="relative"
            />
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderVideo()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    gameVideos: state.games.gameVideo.results
  };
}
export default connect(mapStateToProps, actions)(GameVideo);
