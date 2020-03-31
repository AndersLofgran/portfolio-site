import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <div>
        <h2>Anders Lofgran</h2>
      </div>
      <div className="header-links" >
        <p className="header-item" >Home</p>
        <p className="header-item" >Portfolio</p>
        <p className="header-item" >About</p>
        <p className="header-item" >Contact</p>
      </div>
  </div>
  )
}
