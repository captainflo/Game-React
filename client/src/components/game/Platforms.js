import React from 'react';
import '../css/Game.css';

class Platforms extends React.Component {
  logo = name => {
    switch (name) {
      case 'PlayStation 4' ||
        'PlayStation 3' ||
        'PlayStation 2' ||
        'PS Vita' ||
        'PSP' ||
        'PlayStation':
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
      case 'Xbox One' || 'Xbox 360' || 'Xbox':
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
      case 'Nintendo Switch' ||
        'Nintendo 3DS' ||
        'Nintendo DS' ||
        'Nintendo DSi' ||
        'Wii U' ||
        'Wii' ||
        'GameCube' ||
        'Nintendo 64' ||
        'Game Boy Advance' ||
        'Game Boy Color' ||
        'Game Boy' ||
        'SNES' ||
        'NES':
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
