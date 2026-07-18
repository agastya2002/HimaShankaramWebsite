import React from 'react';
import Objectives from './Objectives';
import bannerImage from '../images/homeBanner.png';

function Home() {
  return (
    <div>
      <div className="home-hero">
        <img
          src={bannerImage}
          alt='Home Banner'
          className="hero-banner"
        />
      </div>
      <Objectives />
    </div>
  );
}

export default Home;
