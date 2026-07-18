import React from 'react';
import '../css/Trustee.css';

function Trustee({ img, name, sub }) {
  return (
    <div className="trustee-card">
      <img className="trusteeImg" src={img} alt="" />
      <div className="trustee-body">
        <h3 className="trustee-title">{name}</h3>
        {sub && <p className="trustee-subtitle">{sub}</p>}
      </div>
    </div>
  );
}

export default Trustee;

