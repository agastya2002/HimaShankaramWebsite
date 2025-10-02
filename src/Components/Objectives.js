import React from 'react';
import Objective from './Objective.js';
import '../css/Home.css';
import { underline } from '../images/index.js';
import Grid from '@mui/material/Grid';

function Objectives() {
  return (
    <div id="objectives" className="objectives">
      <h1>Our Main Objectives</h1>
      <img src={underline} alt="" />
      <div className="objRow">
        <Grid container spacing={2} justifyContent="center">
          <Grid item margin={2}>
            <Objective icon={<i className="fa fa-building icon" aria-hidden="true" />} description="To support schools, orphanages and widow homes." />
          </Grid>
          <Grid item margin={2}>
            <Objective icon={<i className="fa fa-ambulance icon" aria-hidden="true" />} description="To provide relief measures during natural calamities." />
          </Grid>
          <Grid item margin={2}>
            <Objective icon={<i className="fa fa-medkit icon" aria-hidden="true" />} description="To provide food, medicine and clothing to the poor " />
          </Grid>
          <Grid item margin={2}>
            <Objective icon={<i className="fa fa-money icon" aria-hidden="true" />} description="To provide support to meritorius students in need" />
          </Grid>
          <Grid item margin={2}>
            <Objective icon={<i className="fa fa-road icon" aria-hidden="true" />} description="To support establishing and maintaining public amenities" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Objectives;