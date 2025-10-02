import React from 'react';
import '../css/Trustee.css';

function Trustee({ img, name, sub }) {
  return (
    <div className="trustee">
      <img className="trusteeImg" src={img} alt="" />
      <h3>{name}<br />{sub}</h3>
    </div>
  );
}

export default Trustee;

