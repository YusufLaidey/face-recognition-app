import React from 'react'

import Tilt from 'react-tilt'
import brains from './brains.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 110, width: 120 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} src={brains} alt='human brain' />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo