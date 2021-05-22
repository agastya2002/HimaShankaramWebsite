import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { underline} from '../images/index.js';
import '../css/Home.css'
import { motion } from 'framer-motion';
import { animationThree, transition } from '../animations';


function Contact() {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationThree}
      transition={transition}
      id="contact" 
    >
      <div className="contact">
        <h1>Contact Us</h1>
        <img src={underline} alt=''/>
      </div>
      <Row className="contactRow">
        <Col xs={12} lg={4}>
          <div><i class="fa fa-phone icon" aria-hidden="true"/></div>
          <div>+91 96428 45788<br />(Mr Ravi Varma, Trustee)</div>
        </Col>
        <Col xs={12} lg={4}>
          <div><i class="fa fa-envelope icon" aria-hidden="true"/></div>
          <div>gsr_vizag@yahoo.com</div>
        </Col>
        <Col xs={12} lg={4}>
          <div><i class="fa fa-home icon" aria-hidden="true"/></div>
          <div>Visakhapatnam, Andhra Pradesh, India</div>
        </Col>
      </Row>
    </motion.div>
  )
}

export default Contact;