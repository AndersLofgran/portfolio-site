import React, { useState } from 'react'
import flyfpv_preview from '../../assets/flyfpv_preview.png'
import flyfpv_gif from '../../assets/flyfpv_gif.gif'
import smashjam_preview from '../../assets/smashjam_preview.png'
import smashjam_gif from '../../assets/smashjam_gif.gif'
import './Portfolio.css'

export default function Portfolio() {
  const [flyfpvImg, setflyfpvImg] = useState(flyfpv_preview)
  const [smashjamImg, setSmashjamImg] = useState(smashjam_preview)
  
  return (
    <div className='card-page' >
      <div className='card'>
        <div  className='card-image'>
          <img src={flyfpvImg} alt=''/>
        </div>
        <h4>eCommerce</h4>
        <p>A site for FPV/Drone hobbyists to browse and buy parts or share their builds with the FPV community.</p>
        <div className='card-buttons'>
          <button>Source Code</button>
          <button>Site</button>
        </div>
      </div>

      <div className='card'>
        <div  className='card-image'>
          <img src={smashjamImg} alt=''/>
        </div>
        <h4>Game Companion</h4>
        <p>Learn more about the game's fighters, news updates, and create tournaments with friends!</p>
        <p>(Under development)</p>
        <div className='card-buttons'>
          <button>Source Code</button>
          {/* <button>Site</button> */}
        </div>
      </div>
    </div>
  )
}
