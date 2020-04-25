/* eslint-disable no-lone-blocks */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Contact.scss'

export default function Contact() {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const handleInput = (val, type) => {
    if(type === 'subject') setSubject(val)
    if(type === 'body') setBody(val)
  }

{/* Email obfuscator script 2.1 by Tim Williams, University of Arizona
Random encryption key feature coded by Andrew Moulden
This code is freeware provided these four comment lines remain intact
A wizard to generate this code is at http://www.jottings.com/obfuscator/ */}
  let coded = "tD0Maj.Qs8NatD@NOtTQ.PsO"
  let key = "Bmrvk3RfyD05Z4h2JPwCVj7QpOaebSg8KEHoiW9XLqF1A6GndxtMzuNcUIYsTl"
  let shift = coded.length
  let link = ""
  for (let i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) == -1) {
      let ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      let ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
  
  return (
    <div className='contact-page'>
      <a  href={`mailto:${link}`} target='_blank noopener noreferrer' className='contact-icon-container'>
        <FontAwesomeIcon icon={faPaperPlane} className='icon'/>
        <h2>Email me</h2>
      </a>

      <a href='https://docs.google.com/document/d/1dMb3smyrqSIRRWpn5im7FsxFjmSnrSwwh7xoxRWumZY/edit' target='_blank noopener noreferrer' className='contact-icon-container'>
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
