import React, { Component } from 'react'
import Navigation from './components/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank';
import ImageLinkform from './components/ImageLinkform/ImageLinkform';

// import Particles from 'react-particles-js';

import './App.css';

// const particlesOptions = {
//   particles: {
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: '#3CA901',
//         blur: 5
//       }
//     }
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '', 
    }
  }
  
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click')
  }

  render() {
    return (
      <div className="App">
      {/* <Particles className='particles' params={particlesOptions} /> */}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkform onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        {/* <FaceRecognition /> */}
      </div>
    );
    }
}


export default App;
