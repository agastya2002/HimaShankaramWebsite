import React from 'react';
import '../css/FlipCard.css';

function FlipCard({ title, descr, className }) {
  return (
    <article className={`info-card ${className || ''}`.trim()}>
      <div className="info-card-content">
        <h2>{title}</h2>
        <p>{descr}</p>
      </div>
    </article>
  );
}

export default FlipCard;

