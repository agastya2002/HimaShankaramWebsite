import React from 'react'
import '../css/Trustee.css'

function trustee({img, name}) {
  return (
    <div className="trustee">
      <img className="trusteeImg" src={img} alt="" />
      <h3>{name}</h3>
    </div>
  )
}


export default trustee

