import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center na'>
      <div className='absolute mt2'>
        <img src={'https://samples.clarifai.com/face-det.jpg'} alt='' width='350px' height='auto'/>
        {/* <img id='inputimage' src={imageUrl} alt={rgrs} /> */}
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  )
}

export default FaceRecognition 