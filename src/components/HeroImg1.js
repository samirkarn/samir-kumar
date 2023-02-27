import React from 'react'
import "./HeroImg1.css"

const HeroImg1 = (props) => {
  return (
    <div className='hero-img'>
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.details}</p>
        </div>
    </div>
  )
}

export default HeroImg1