import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { underline} from '../images/index.js';
import '../css/Home.css'

function Contact() {
  return (
    <div id="contact" >
      <div className="contact">
        <h1>Contact Us</h1>
        <img src={underline} alt=''/>
      </div>
      <Row className="contactRow">
        <Col xs={12} lg={4}>
          <div><i class="fa fa-phone icon" aria-hidden="true"/></div>
          <div>1800-234-7689</div>
        </Col>
        <Col xs={12} lg={4}>
          <div><i class="fa fa-envelope icon" aria-hidden="true"/></div>
          <div>abc@gmail.com</div>
        </Col>
        <Col xs={12} lg={4}>
          <div><i class="fa fa-home icon" aria-hidden="true"/></div>
          <div>Visakhapatnam, Andhra Pradesh, India</div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact;