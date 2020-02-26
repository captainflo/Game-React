import React from 'react';
import '../css/Slider.css';
import ScrollAnimation from 'react-animate-on-scroll';

class SliderGame extends React.Component {
  render() {
    const { game } = this.props;
    return (
      <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
        <div
          style={{ backgroundImage: `url(${game.background_image})` }}
          className="box-slider"
        >
          <ScrollAnimation
            animateOnce={true}
            delay={1000}
            animateIn="fadeInDown"
          >
            <div className="box-text">
              <h3>{game.name}</h3>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    );
  }
}

export default SliderGame;
