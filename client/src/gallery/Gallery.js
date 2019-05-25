import React from "react"
import './Gallery.css'
import ramen1 from './ramen1.png'
import ramen2 from './ramen2.png'
import ramen3 from './ramen3.png'
import ramen4 from './ramen4.png'

const Gallery = () => {


    return(
        <div className="gallery">
            <h1>Gallery</h1>
            <div className='img-scroll'>
                <img src={ramen1} alt='ramen 1' />
                <img src={ramen2} alt='ramen 2' />
                <img src={ramen3} alt='ramen 3' />
                <img src={ramen4} alt='ramen 4' />
            </div>
        </div>
    )
}

export default Gallery