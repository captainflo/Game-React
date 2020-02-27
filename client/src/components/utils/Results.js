import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Results.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Results extends React.Component {
  renderAllGames = () => {
    if (this.props.games) {
      return this.props.games.map(game => {
        return (
          <div className="col m3 s6" key={game.id}>
            <div className="card-game">
              <Link to={`/game/${game.id}`}>
                <img src={game.background_image} alt={game.id} />
                <p>{game.name}</p>
              </Link>
            </div>
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
    const { gameResult } = this.props;
    return (
      <ScrollAnimation animateOnce={true} animateIn="fadeInUp">
        <div className="box-results">
          <ScrollAnimation delay={1000} animateOnce={true} animateIn="fadeIn">
            <div className="row">
              <div className="col m3 s6">
                <div key={gameResult.id}>
                  <div className="card-game">
                    <Link to={`/game/${gameResult.id}`}>
                      <img
                        src={gameResult.background_image}
                        alt={gameResult.id}
                      />
                      <p>{gameResult.name}</p>
                    </Link>
                  </div>
                </div>
              </div>
              {this.renderAllGames()}
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    );
  }
}

export default Results;
