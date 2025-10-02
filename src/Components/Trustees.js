import React from 'react';
import Trustee from './Trustee.js';
import '../css/Home.css';
import { underline, trustee0, trustee1, trustee2, trustee3, trustee4, trustee5, trustee6 } from '../images/index.js';
import Grid from '@mui/material/Grid';

function Trustees() {
  return (
    <div id="trustees">
      <div className="trustees">
        <h1>Trustees</h1>
        <img src={underline} alt="" />
      </div>
      <div>
        <div className="trustee">
          <Trustee img={trustee0} name="G S RAJU" sub="Chairman" />
        </div>
        <div className="grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          justifyContent: 'center', 
          gap: '20px', 
          maxWidth: '100vw' 
        }}>
          <Trustee img={trustee1} name="K V V G DIWAKAR" />
          <Trustee img={trustee2} name="D RAVI VARMA" />
          <Trustee img={trustee3} name="D C P VISALA" />
          <Trustee img={trustee4} name="G PAVAN KUMAR" />
          <Trustee img={trustee5} name="P CHAYA" />
          <Trustee img={trustee6} name="K SUSEELA" />
        </div>
      </div>
    </div>
  );
}

export default Trustees;