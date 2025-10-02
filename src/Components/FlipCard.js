import React from 'react'
import '../css/FlipCard.css'

function FlipCard({img, title, descr}) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2 className="centered">{title}</h2>
          <img className="card-img" src={img} alt="Avatar" style={{"width":"100%","height":"100"}}/>
        </div>
        <div className="flip-card-back">
          <h2>{title}</h2>
          <p>{descr}</p>
        </div>
      </div>
    </div>
  )
}

export default FlipCard

