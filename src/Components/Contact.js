import React from 'react';
import { underline } from '../images/index.js';
import '../css/Home.css';
import Grid from '@mui/material/Grid';

function Contact() {
  return (
    <div id="contact">
      <div className="contact">
        <h1>Contact Us</h1>
        <img src={underline} alt="" />
      </div>
      <Grid container spacing={2} className="contactRow">
        <Grid item xs={12} lg={4}>
          <div><i className="fa fa-phone icon" aria-hidden="true" /></div>
          <div>+91 96428 45788<br />(Mr Ravi Varma, Trustee)</div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div><i className="fa fa-envelope icon" aria-hidden="true" /></div>
          <div>gsr_vizag@yahoo.com</div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div><i className="fa fa-home icon" aria-hidden="true" /></div>
          <div>Visakhapatnam, Andhra Pradesh, India</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;