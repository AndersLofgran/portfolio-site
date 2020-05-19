import React, { useState } from 'react'
import flyfpv_gif from '../../assets/flyfpv_gif.gif'
import smashjam_gif from '../../assets/smashjam_gif.gif'
import bgwishlist_gif from '../../assets/bgwishlist_gif.gif'
import diceroller_gif from '../../assets/diceroller_gif.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faGamepad, faPuzzlePiece, faDiceD20 } from '@fortawesome/free-solid-svg-icons'
import './Portfolio.scss'

export default function Portfolio() {
  const [gifcard, setGifcard] = useState()
  const [gifVis, setGifVis] = useState('hidden')
  
  return (
    <>
      <div className='card-page' >
        <div className='card-wrapper'>
          <div  className='card'
                onClick={() => {
                  setGifVis('visible')
                  setGifcard(flyfpv_gif)
                }}>
            <div className='card-title'>
              <FontAwesomeIcon icon={faShoppingCart} style={{color: 'lightskyblue'}}/>
              <h4>eCommerce Platform</h4>
            </div>
            <p>A site for FPV/Drone hobbyists to browse and buy parts or share their builds with the FPV community.</p>
          </div>

          <div className='card-links'>
            <a href='https://github.com/AndersLofgran/flyfpv' target='_blank noopener noreferrer'>Source Code</a>
            <a href='http://167.172.119.254:4499/#/' target='_blank noopener noreferrer'>Site</a>
          </div>
        </div>

        <div className='card-wrapper'>
          <div  className='card'
                onClick={() => {
                  setGifVis('visible')
                  setGifcard(smashjam_gif)
                }}>
            <div className='card-title'>
              <FontAwesomeIcon icon={faGamepad} style={{color: 'lightskyblue'}}/>
              <h4>Game Companion</h4>
            </div>
            <p>Learn more about the game's fighters, news updates, and create or join in tournaments with friends! <br/><br/>(Under development)</p>
          </div>

          <div className='card-links'>
            <a href='https://github.com/Game-Companion-App/smash-jam' target='_blank noopener noreferrer'>Source Code</a>
          </div>
        </div>

        <div className='card-wrapper'>
          <div  className='card'
                onClick={() => {
                  setGifVis('visible')
                  setGifcard(bgwishlist_gif)
                }}>
            <div className='card-title'>
              <FontAwesomeIcon icon={faPuzzlePiece} style={{color: 'lightskyblue'}}/>
              <h4>Board Game Wishlist</h4>
            </div>
            <p>Search through hundreds of games and find some new favorites.</p>
          </div>

          <div className='card-links'>
            <a href='https://github.com/AndersLofgran/NoDB-project' target='_blank noopener noreferrer'>Source Code</a>
          </div>
        </div>

        <div className='card-wrapper'>
          <div  className='card'
                onClick={() => {
                  setGifVis('visible')
                  setGifcard(diceroller_gif)
                }}>
            <div className='card-title'>
              <FontAwesomeIcon icon={faDiceD20} style={{color: 'lightskyblue'}}/>
              <h4>Dice Roller</h4>
            </div>
            <p>Simple dice roller with custom dice saving, for all your role-playing needs. <br/><br/> (My first, self-taught project)</p>
          </div>
          
          <div className='card-links'>
            <a href='https://github.com/AndersLofgran/dice-roller' target='_blank noopener noreferrer'>Source Code</a>
          </div>
        </div>

      </div>

      <div className={`gif-${gifVis}`} onClick={() => setGifVis('hidden')}>
        <img src={gifcard} alt=''/>
      </div>
    </>
  )
}
