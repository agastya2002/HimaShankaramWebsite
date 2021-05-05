import React from 'react'
import '../css/FlipCard.css'

function FlipCard({img, title, descr}) {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2 class="centered">{title}</h2>
          <img class="card-img" src={img} alt="Avatar" style={{"width":"100%","height":"100"}}/>
        </div>
        <div class="flip-card-back">
          <h2>{title}</h2>
          <p>{descr}</p>
        </div>
      </div>
    </div>
  )
}

export default FlipCard

