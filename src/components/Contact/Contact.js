/* eslint-disable no-lone-blocks */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Contact.scss'

export default function Contact() {
  const [showEmail, setShowEmail] = useState()

  const handleShowEmail = () => {
    return showEmail === undefined ? setShowEmail(1) : setShowEmail(undefined)
  }
  
  return (
    <div className='contact-page'>
      <a className='contact-icon-container' onClick={() => handleShowEmail()}>
        {showEmail ?
            <div className='show-email'>
              <p>anders.lofgran@gmail.com</p>
            </div>
          :
            <FontAwesomeIcon icon={faPaperPlane} className='icon'/>
        }
        <h2>Email me</h2>
      </a>

      <a href='https://docs.google.com/document/d/1MmmhrAOBS9wnwHrl91Md8Z0xspH9MnD9P4LlGelG_Wg/edit?usp=sharing' target='_blank noopener noreferrer' className='contact-icon-container'>
        <FontAwesomeIcon icon={faFileAlt} className='icon'/>
        <h2>Resume</h2>
      </a>

      <a href='https://www.linkedin.com/in/anders-lofgran/' target='_blank noopener noreferrer' className='contact-icon-container'>
        <FontAwesomeIcon icon={faLinkedin} className='icon'/>
        <h2>LinkedIn</h2>
      </a>

      <a href='https://github.com/AndersLofgran' target='_blank noopener noreferrer' className='contact-icon-container'>
        <FontAwesomeIcon icon={faGithubSquare} className='icon'/>
        <h2>Github</h2>
      </a>
    </div>
  )
}
