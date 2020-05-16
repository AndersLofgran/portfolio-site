import React from 'react'
import mug from '../../assets/mug.jpg'
import './About.scss'

export default function About() {
  return (
    <div className='about'>
      <img src={mug} alt='' className='about-image'/>
      <p>I am a Full Stack Web Developer drawn to simplicity and quality website design.</p>
    </div>
  )
}
