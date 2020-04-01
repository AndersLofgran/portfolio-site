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
      <img src={bkg}/>

      {page > 0 ?
          <DoubleArrowRoundedIcon style={{transition: '1s', opacity: '1', transform: 'rotate(180deg)', filter: 'invert(1)', fontSize: '60px', margin: '15% 30px'}} onClick={() => pageChanger(-1)}/>
        :
          <DoubleArrowRoundedIcon style={{transition: '1s', opacity: '0', transform: 'rotate(180deg)', fontSize: '60px', margin: '15% 30px'}}/>
      }

      <div className='landing'>
        <div>
          <h1>Full</h1>
          <h1>Stack</h1>
          <h1>Web</h1>
          <h1>Developer</h1>
        </div>
        <p>Go on, take a peek.</p>
      </div>

      <Portfolio />
      <About />
      <Contact />

      {page > 3 ?
          <DoubleArrowRoundedIcon style={{transition: '1s', opacity: '0', fontSize: '60px', margin: '15% 30px'}}/>
        :
          <DoubleArrowRoundedIcon style={{transition: '1s', opacity: '1', filter: 'invert(1)', fontSize: '60px', margin: '15% 30px'}} onClick={() => pageChanger(1)}/>
      }
    </div>
  )
}

export default Main