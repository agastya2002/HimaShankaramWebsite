import React from 'react';
import '../css/Objective.css';
import Grid from '@mui/material/Grid';

function Objective({ icon, description }) {
  return (
    <Grid container spacing={2} className="rowItems" sx={{ alignItems: 'flex-start' }}>
      <Grid item className="pic" marginRight={2}>
        {icon}
      </Grid>
      <Grid item className="descr">
        <p>{description}</p>
      </Grid>
    </Grid>
  );
}

export default Objective;

