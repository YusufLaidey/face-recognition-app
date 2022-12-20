import React, { Component } from 'react'
import Navigation from './components/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank';
import Register from './components/Register';
import Signin from './components/Signin/Signin';
import ImageLinkform from './components/ImageLinkform/ImageLinkform';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
// import Clarifai from 'clarifai';

// import Particles from 'react-particles-js';

import './App.css';


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
      route: 'signin',
      isSignedIn: false
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

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if ( route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} /> 
        { this.state.route === 'home' 
          ?   <div>
              <Logo />
              <Rank />
              <ImageLinkform onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
            </div>
            : (
              this.state.route === 'signin' 
                ? <Signin onRouteChange={this.onRouteChange} />
                : <Register onRouteChange={this.onRouteChange} />
            )
          }
        </div>
      );
    }
} 


export default App;
