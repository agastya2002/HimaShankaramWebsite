import React from 'react';
import Objectives from './Objectives';
import bannerImage from '../images/homeBanner.png';

function Home() {
  return (
    <div>
        <img
          src={bannerImage}
          alt='Home Banner'
          style={{ width: '100%', height: 'auto' }}
        />
      <Objectives />
    </div>
  );
}

export default Home;
