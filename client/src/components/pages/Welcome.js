import React from 'react';
import '../css/Welcome.css';
import Slider from '../utils/Slider';
import Footer from '../utils/Footer';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default Welcome;
