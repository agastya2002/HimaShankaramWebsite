import React from 'react';
import Objectives from './Objectives';
import bannerImage from '../images/homeBanner.png';

function Home() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <img
          src={bannerImage}
          alt='Home Banner'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <Objectives />
    </div>
  );
}

export default Home;
