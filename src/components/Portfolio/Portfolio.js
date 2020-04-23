import React from 'react'
import flyFPV_preview from '../../assets/flyFPV_preview.png'
import './Portfolio.css'

export default function Portfolio() {
  
  return (
    <div className='card-page' >
      <div className='card'>
        <img src={flyFPV_preview} alt=''/>
        <h4>eCommerce Site</h4>
        <p>A site for FPV/Drone hobbyists to browse and buy parts or share their builds with the FPV community.</p>
        <div className='card-buttons'>
          <button>Source Code</button>
          <button>Site</button>
        </div>
      </div>
    </div>
  )
}
