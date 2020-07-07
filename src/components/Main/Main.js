import React, { useState, useEffect } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import mug from '../../assets/mug.jpg'
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
// import { faJsSquare, faReact, faNode } from '@fortawesome/free-brands-svg-icons'
// import postgresqlIcon from '../../assets/postgresql_icon.svg'
import './Main.scss'


const Main = () => {
  const [page, setPage] = useState(0)
  const [picFg, setPicFg] = useState('pic-load')
  const [picBkg, setPicBkg] = useState('pic-load');
  const [nameText, setNameText] = useState('name-text main-text-load')
  const [brandText, setBrandText] = useState('brand-text main-text-load')
  const [ctaText, setCtaText] = useState('cta-text main-text-load')

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPicFg('pic-fg')
      setPicBkg('pic-bkg')
      setNameText('name-text main-text')
      setBrandText('brand-text main-text')
      setCtaText('cta-text main-text')
    }, 500)
    return () => clearTimeout(timer1)
  })

  const pageChanger = num => {
    setPage(page + num)
  }
  const pageNav = num => {
    setPage(num)
  }
  
  return (
    <>

      <div className="main" >
        <FontAwesomeIcon icon={faCode} className='code-icon' style={{transform: `translate(calc(${page} * 2vw + 38vw), 200px)`}}/>

        {page === 0 ?
            <DoubleArrowRoundedIcon className='nav-arrow arrow-left' style={{transition: '1s', fontSize: '3vw', opacity: '0'}}/>
          :
            <DoubleArrowRoundedIcon className='nav-arrow arrow-left' style={{transition: '1s', fontSize: '3vw', opacity: '1', filter: 'invert(1)'}} onClick={() => pageChanger(-1)}/>
        }

        <div className='main-content' style={{transform: `translateX(calc(${-page} * 100vw))`}}>
          <div className='page'>
            <SimpleBar style={{width: '100%', height: '100%'}}>
              <div className='home-page'>
              <img src={mug} alt='' className={picFg}/>
              <img src={mug} alt='' className={picBkg}/>
      {/* about me section */}
                <div className='home-text'>
                  <div>
                    <h1 className={nameText}>Anders Lofgran</h1>
                    <h1 className={brandText}>Freelance Web Developer</h1>
                  </div>
        {/* CTA text & buttons */}
                  <div className={ctaText}>
                    <p>Where my passion and logic combine, ready to create your next project.</p>
                    <button onClick={() => pageNav(1)}>View Projects</button>
                    <button onClick={() => pageNav(2)}>Contact Me</button>
                  </div>
        {/* skill icons */}
                  {/* <div className='about-skills'>
                    <div> <FontAwesomeIcon className='skill-icon' icon={faJsSquare} /> </div> +
                    <div> <FontAwesomeIcon className='skill-icon' icon={faReact} /> </div> +
                    <div> <FontAwesomeIcon className='skill-icon' icon={faNode} /> </div> +
                    <div> <img src={postgresqlIcon} alt='postgresql icon' className='skill-icon' style={{filter: 'invert(79%) sepia(4%) saturate(5594%) hue-rotate(175deg) brightness(101%) contrast(96%)'}}/> </div>
                  </div> */}
                </div>
              </div>
            </SimpleBar>
          </div>

          <div className='page'> <Portfolio /> </div>
          <div className='page'> <Contact /> </div>
        </div>


        {page === 2 ?
            <DoubleArrowRoundedIcon className='nav-arrow arrow-right' style={{transition: '1s', fontSize: '3vw', opacity: '0'}}/>
          :
            <DoubleArrowRoundedIcon className='nav-arrow arrow-right' style={{transition: '1s', fontSize: '3vw', opacity: '1', filter: 'invert(1)'}} onClick={() => pageChanger(1)}/>
        }
      </div>
    </>
  )
}

export default Main