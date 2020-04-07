import React from 'react'
import mugshot from '../../assets/mugshot.jfif'
import toothpick from '../../assets/toothpick.jpg'
import './About.css'

export default function About() {
  return (
    <div className='about'>
      <div>
        <img src={mugshot} className='about-image'/>
        <img src={toothpick} className='about-image' style={{transform: 'rotate(90deg)'}}/>
      </div>
      <div>
        <h1>I love coding.</h1>
        <br></br>
        <h4>
        I knew I had an inner fire for software development when I often found myself
        coding all day, engrossed in a challenging problem or merely excited to see the end result.
        </h4>
        <br></br>
        <p>If I'm not coding, I build & fly FPV drones, play board games and video games with friends, and rock climb.</p>
      </div>
    </div>
  )
}
