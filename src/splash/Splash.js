import React from "react"
import './Splash.css'
import SplashImg from './splash.png'
import About from '../about/About'
import arrow from './arrow.png'

const Splash = () => {


    return(
        <div className="splash d-flex flex-column justify-content-center">
            <img src={SplashImg} className="align-self-center splash-img" />
            <a className="" href="#about-page"><img src={arrow} className='scroll-arrow' /></a>
        </div>
    )
}

export default Splash
