import React from 'react';
import '../css/Game.css';

class Platforms extends React.Component {
  logo = name => {
    switch (name) {
      case 'PlayStation 4':
      case 'PlayStation 3':
      case 'PlayStation 2':
      case 'PS Vita':
      case 'PSP':
      case 'PlayStation':
        return (
          <div className="box-image">
            <img
              className="image-sony"
              src={
                process.env.PUBLIC_URL +
                '/images/platforms/playstation-logo.png'
              }
              alt={name}
            />
            <span>{name}</span>
          </div>
        );
      case 'Xbox One':
      case 'Xbox 360':
      case 'Xbox':
        return (
          <div className="box-image">
            <img
              className="image-xbox"
              src={process.env.PUBLIC_URL + '/images/platforms/xbox-logo.png'}
              alt={name}
            />
            <span>{name}</span>
          </div>
        );
      case 'Nintendo Switch':
      case 'Nintendo 3DS':
      case 'Nintendo DS':
      case 'Nintendo DSi':
      case 'Wii U':
      case 'Wii':
      case 'GameCube':
      case 'Nintendo 64':
      case 'Game Boy Advance':
      case 'Game Boy Color':
      case 'Game Boy':
      case 'SNES':
      case 'NES':
        return (
          <div className="box-image">
            <img
              className="image-nintendo"
              src={
                process.env.PUBLIC_URL + '/images/platforms/nintendo-logo.png'
              }
              alt={name}
            />
            <span>{name}</span>
          </div>
        );
      default:
        return <li className="box-image">{name}</li>;
    }
  };

  render() {
    let { name } = this.props;

    return <div>{this.logo(name)}</div>;
  }
}

export default Platforms;
