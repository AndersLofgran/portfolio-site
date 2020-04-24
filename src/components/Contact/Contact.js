import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import './Contact.scss'

export default function Contact() {
  return (
    <div className='contact-card'>
      <form action='mailto:anders.lofgran@gmail.com' method='GET' target='_blank noopener noreferrer'>
        <h4>Email me</h4>
        <div className='form-inputs'>
          <input placeholder='Subject'></input>
          <textarea placeholder='Body'></textarea>
        </div>
      </form>

      <div className='contact-icons'>
        <FontAwesomeIcon icon={faLinkedin}/>
        <FontAwesomeIcon icon={faGithubSquare}/>
      </div>
    </div>
  )
}
