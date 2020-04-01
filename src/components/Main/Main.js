import React, {useState} from 'react'
import bkg from '../../assets/bkg_overlay.png'
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded'
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Contact from '../Contact/Contact'
import './Main.css'

const Main = () => {
  const [page, setPage] = useState(0)

  const pageChanger = num => {
    setPage(page + num)
  }
  
  return (
    <div className="main" >
      <img src={bkg} alt='Background'/>

      {page === 0 ?
          <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', left: '20px', height: '100vh', transition: '1s', opacity: '0', transform: 'rotate(180deg)', fontSize: '60px'}}/>
        :
          <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', left: '20px', height: '100vh', transition: '1s', opacity: '1', transform: 'rotate(180deg)', filter: 'invert(1)', fontSize: '60px'}} onClick={() => pageChanger(-1)}/>
      }

      <div className='main-content' style={{transform: `translateX(calc(${-page} * 100vw))`, transition: '1s'}}>
        <div className='page'>
          <div>
            <h3>I'm a</h3>
            <h1>Full</h1>
            <h1>Stack</h1>
            <h1>Web</h1>
            <h1>Developer</h1>
          </div>
        </div>
        <div className='page'> <Portfolio /> </div>
        <div className='page'> <About /> </div>
        <div className='page'> <Contact /> </div>
      </div>


      {page === 3 ?
          <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', right: '20px', height: '100vh', transition: '1s', opacity: '0', fontSize: '60px'}}/>
        :
          <DoubleArrowRoundedIcon style={{zIndex: '2', position: 'fixed', top: '0', right: '20px', height: '100vh', transition: '1s', opacity: '1', filter: 'invert(1)', fontSize: '60px'}} onClick={() => pageChanger(1)}/>
      }
    </div>
  )
}

export default Main