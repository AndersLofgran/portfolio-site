import React from 'react'
import './Header.scss'

export default function Header(props) {

  return (
    <div className="header">
      <div className="header-links" >
        <p  className={`header-item ${props.currentPage === 0 ? 'active' : ''}`}
            onClick={() => {props.pageNav(0)}}
            >About Me</p>
        <p  className={`header-item ${props.currentPage === 1 ? 'active' : ''}`}
            onClick={() => {props.pageNav(1)}}
            >Portfolio</p>
        <p  className={`header-item ${props.currentPage === 2 ? 'active' : ''}`}
            onClick={() => {props.pageNav(2)}}
            >Contact</p>
      </div>
  </div>
  )
}
