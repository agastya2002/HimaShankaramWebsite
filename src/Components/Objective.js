import React from 'react';
import '../css/Objective.css';

function Objective({ image, title, description, reverse }) {
  return (
    <div className={`objective-container${reverse ? ' reverse' : ''}`}>
      <div className="objective-image">
        <img src={image} alt={title}/>
      </div>
      <div className="objective-text">
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default Objective;

