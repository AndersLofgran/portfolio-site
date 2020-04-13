import React, {useEffect, useState} from 'react'
import './Header.css'

export default function Header(props) {
  // const [currentPage, setCurrentPage] = useState(0)
  // useEffect(() => {
  //   setCurrentPage(props.pageNav)
  // }, [props.pageNav])

  return (
    <div className="header">
      <div>
        <h2>Anders Lofgran</h2>
      </div>
      <div className="header-links" >
        <p  className={`header-item ${props.currentPage === 0 ? 'active' : ''}`}
            onClick={() => {props.pageNav(0)}}
            >Home</p>
        <p  className={`header-item ${props.currentPage === 1 ? 'active' : ''}`}
            onClick={() => {props.pageNav(1)}}
            >Portfolio</p>
        <p  className={`header-item ${props.currentPage === 2 ? 'active' : ''}`}
            onClick={() => {props.pageNav(2)}}
            >About</p>
        <p  className={`header-item ${props.currentPage === 3 ? 'active' : ''}`}
            onClick={() => {props.pageNav(3)}}
            >Contact</p>
      </div>
  </div>
  )
}
