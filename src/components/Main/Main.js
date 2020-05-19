import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import mug from '../../assets/mug.jpg'
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import './Main.scss'

const Main = () => {
  const [page, setPage] = useState(0)
  const [pic, setPic] = useState('pic-load')
  const [nameText, setNameText] = useState('name-text-load')
  const [brandText, setBrandText] = useState('brand-text-load')
  const [aboutBody, setAboutBody] = useState('about-body-load')

  useEffect(() => {
    const timer1 = setTimeout(() => setPic('pic'), 500)
    const timer2 = setTimeout(() => setNameText('name-text'), 1000)
    const timer3 = setTimeout(() => setBrandText('brand-text'), 2000)
    const timer4 = setTimeout(() => setAboutBody('about-body'), 3000)
    return () => clearTimeout(timer1, timer2, timer3, timer4)
  })

  const pageChanger = num => {
    setPage(page + num)
  }
  const pageNav = num => {
    setPage(num)
  }
  
  return (
    <>
      <Header pageNav={pageNav}
              currentPage={page} />

      <div className="main" >
        <FontAwesomeIcon icon={faCode} className='code-icon' style={{transform: `translate(calc(${page} * 2vw + 38vw), 200px)`}}/>

        {page === 0 ?
            <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', left: '100px', margin: 'calc(50vh - 30px) 0', transition: '1s', opacity: '0', transform: 'rotate(180deg)', fontSize: '60px'}}/>
          :
            <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', left: '100px', margin: 'calc(50vh - 30px) 0', transition: '1s', opacity: '1', transform: 'rotate(180deg)', filter: 'invert(1)', fontSize: '60px'}} onClick={() => pageChanger(-1)}/>
        }

        <div className='main-content' style={{transform: `translateX(calc(${-page} * 100vw))`}}>
          <div className='page'>
            <div className='home-page'>
              <img src={mug} alt='' className={pic}/>
              <div className='home-text'>
                <h1 className={nameText}>Anders Lofgran</h1>
                <h3 className={brandText}><a href="https://www.youtube.com/watch?v=H4M19g0xVJs" target='_blank noopener noreferrer' >Full Stack Web Developer</a></h3>
                <div className={aboutBody}>
                  <p>
                    Having come from the medical field and graduating from DevMountain, I have many new exciting skills
                    that I can't wait to use and develop. Nothing ignites my inner fire to create as easily as programming.
                  </p>
                  <br/>
                  <p> Currently, I am collaborating on a site/application for connecting innovators and sharing ideas. </p>
                  <div className='about-skills'>
                    <div> <FontAwesomeIcon className='skill-icon' icon={faJsSquare} />  <h4>JavaScript</h4>   </div>
                    <div> <FontAwesomeIcon className='skill-icon' icon={faReact} />     <h4>React</h4>        </div>
                    <div> <FontAwesomeIcon className='skill-icon' icon={faNodeJs} />    <h4>Node.js</h4>      </div>
                    <div> <FontAwesomeIcon className='skill-icon' icon={faDatabase} />  <h4>PostgreSQL</h4>   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='page'> <Portfolio /> </div>
          <div className='page'> <Contact /> </div>
        </div>


        {page === 2 ?
            <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', right: '100px', margin: 'calc(50vh - 30px) 0', transition: '1s', opacity: '0', fontSize: '60px'}}/>
          :
            <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', right: '100px', margin: 'calc(50vh - 30px) 0', transition: '1s', opacity: '1', filter: 'invert(1)', fontSize: '60px'}} onClick={() => pageChanger(1)}/>
        }
      </div>
    </>
  )
}

export default Main