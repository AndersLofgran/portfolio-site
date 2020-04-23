import React, {useState} from 'react'
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded'
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Contact from '../Contact/Contact'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import './Main.css'

const Main = () => {
  const [page, setPage] = useState(0)

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
        <FontAwesomeIcon icon={faCode} className='code-icon' style={{transform: `translateX(calc(${page} * 2vw + 38vw))`, transition: '1s'}}/>

        {page === 0 ?
            <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', left: '100px', margin: 'calc(50vh - 30px) 0', transition: '1s', opacity: '0', transform: 'rotate(180deg)', fontSize: '60px'}}/>
          :
            <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', left: '100px', margin: 'calc(50vh - 30px) 0', transition: '1s', opacity: '1', transform: 'rotate(180deg)', filter: 'invert(1)', fontSize: '60px'}} onClick={() => pageChanger(-1)}/>
        }

        <div className='main-content' style={{transform: `translateX(calc(${-page} * 100vw))`, transition: '1s'}}>
          <div className='page'>
            <div className='home-page'>
              <FontAwesomeIcon icon={faLayerGroup} className='stack-icon'/>
              <div>
                <h1 style={{paddingLeft: '10px'}}>Anders</h1>
                <h1>Lofgran</h1>
                <h3><a href="https://www.youtube.com/watch?v=H4M19g0xVJs" target='_blank noopener noreferrer' style={{textDecoration: 'none', paddingLeft: '10px'}}>Full Stack</a></h3>
                <h3><a href="https://www.youtube.com/watch?v=H4M19g0xVJs" target='_blank noopener noreferrer' style={{textDecoration: 'none', paddingLeft: '10px'}}>Web Developer</a></h3>
              </div>
            </div>
          </div>
          <div className='page'> <Portfolio /> </div>
          <div className='page'> <About /> </div>
          <div className='page'> <Contact /> </div>
        </div>


        {page === 3 ?
            <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', right: '100px', margin: 'calc(50vh - 30px) 0', transition: '1s', opacity: '0', fontSize: '60px'}}/>
          :
            <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', right: '100px', margin: 'calc(50vh - 30px) 0', transition: '1s', opacity: '1', filter: 'invert(1)', fontSize: '60px'}} onClick={() => pageChanger(1)}/>
        }
      </div>
    </>
  )
}

export default Main