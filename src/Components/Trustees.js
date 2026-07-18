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
      <div className="trustee-grid-wrapper">
        <div className="trustee-chairman-row">
          <Trustee img={trustee0} name="G S RAJU" sub="Chairman" />
        </div>
        <div className="trustee-grid">
          <div className="trustee-card-item">
            <Trustee img={trustee1} name="K V V G DIWAKAR" />
          </div>
          <div className="trustee-card-item">
            <Trustee img={trustee2} name="D RAVI VARMA" />
          </div>
          <div className="trustee-card-item">
            <Trustee img={trustee4} name="G PAVAN KUMAR" />
          </div>
          <div className="trustee-card-item">
            <Trustee img={trustee5} name="P CHAYA" />
          </div>
          <div className="trustee-card-item">
            <Trustee img={trustee6} name="K SUSEELA" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trustees;