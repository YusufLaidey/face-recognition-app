import React, { Component } from 'react'
import Navigation from './components/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank';
import ImageLinkform from './components/ImageLinkform/ImageLinkform';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
// import Clarifai from 'clarifai';

// import Particles from 'react-particles-js';

import './App.css';
import Signin from './components/Signin/Signin';

// const app = new Clarifai.App({
//   apiKey: '4933e75a70d5413587dafa338ac2e37f'
// });

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
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }
  // <Particles className='particles' params={particlesOptions} />

  calculateFcaeLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
   return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width * (clarifaiFace.right_col * width),
    bottomRow: height * (clarifaiFace.bottom_row * height),
   }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setstate({box: box})
  }

  onInputChange = (event) => {
    this.setstate({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    console.log('click');
    // app.models.predict( Clarifai.FACE_DETECT_MODEL, this.state.input).then(response => this.displayFaceBox(this.calculateFcaeLocation(response));
    // .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navigation /> 
        <Signin />
        <Logo />
        <Rank />
        <ImageLinkform onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
    }
}


export default App;
