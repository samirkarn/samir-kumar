import React from 'react'

const TechCart = (props) => {
  return (
    <div>
        <div className="tech-container">
          <img src={props.imgSrc} alt={props.techName} />
          <h2>{props.techName}</h2>
          <p className='tag'>-{props.tagOne}</p>
          <p className='tag'>-{props.tagTwo}</p>
          <p className='tag'>-{props.tagThree}</p>
        </div>
    </div>
  )
}

export default TechCart