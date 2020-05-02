import React, { useState } from 'react'
import flyfpv_preview from '../../assets/flyfpv_preview.png'
import flyfpv_gif from '../../assets/flyfpv_gif.gif'
import smashjam_preview from '../../assets/smashjam_preview.png'
import smashjam_gif from '../../assets/smashjam_gif.gif'
import bgwishlist_preview from '../../assets/bgwishlist_preview.png'
import bgwishlist_gif from '../../assets/bgwishlist_gif.gif'
import './Portfolio.scss'

export default function Portfolio() {
  const [gifcard, setGifcard] = useState()
  const [gifVis, setGifVis] = useState('hidden')
  
  return (
    <>
      <div className='card-page' >
        <div className='card'>
          <div className='card-image'>
            <img src={flyfpv_preview} alt=''/>
          </div>
          <h4>eCommerce Website</h4>
          <p>A site for FPV/Drone hobbyists to browse and buy parts or share their builds with the FPV community.</p>
          <div className='card-links'>
            <a href='https://github.com/AndersLofgran/flyfpv' target='_blank noopener noreferrer'>Source Code</a>
            <a href='http://167.172.119.254:4499/#/' target='_blank noopener noreferrer'>Site</a>
            <button 
              onClick={() => {
                setGifVis('visible')
                setGifcard(flyfpv_gif)
            }}>Preview</button>
          </div>
        </div>

        <div className='card'>
          <div  className='card-image'>
            <img src={smashjam_preview} alt=''/>
          </div>
          <h4>Game Companion Website</h4>
          <p>Learn more about the game's fighters, news updates, and create or join in tournaments with friends! (Under development)</p>
          <div className='card-links'>
            <a href='https://github.com/Game-Companion-App/smash-jam' target='_blank noopener noreferrer'>Source Code</a>
            <button 
              onClick={() => {
                setGifVis('visible')
                setGifcard(smashjam_gif)
            }}>Preview</button>
          </div>
        </div>

        <div className='card'>
          <div  className='card-image'>
            <img src={bgwishlist_preview} alt=''/>
          </div>
          <h4>Board Game Wishlist</h4>
          <p>Search through hundreds of games and find some new favorites.</p>
          <div className='card-links'>
            <a href='https://github.com/AndersLofgran/NoDB-project' target='_blank noopener noreferrer'>Source Code</a>
            <button 
              onClick={() => {
                setGifVis('visible')
                setGifcard(bgwishlist_gif)
            }}>Preview</button>
          </div>
        </div>
      </div>

      <div className={`gif-${gifVis}`} onClick={() => setGifVis('hidden')}>
        <img src={gifcard} alt=''/>
      </div>
    </>
  )
}
