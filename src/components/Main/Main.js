import React from 'react'
import bkg from '../../assets/bkg_overlay.png'
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded'
import './Main.css'

export default function Main() {
  return (
    <div className="main" >
      <img src={bkg}/>

      <DoubleArrowRoundedIcon style={{transform: 'rotate(180deg)', filter: 'invert(1)', fontSize: '60px', margin: '15% 30px'}} />
      <div className='main-content' >
        <div>
          <h1>Full</h1>
          <h1>Stack</h1>
          <h1>Web</h1>
          <h1>Developer</h1>
        </div>
        <p>Go on, take a peek.</p>
      </div>
      <DoubleArrowRoundedIcon style={{filter: 'invert(1)', fontSize: '60px', margin: '15% 30px'}} />
    </div>
  )
}
