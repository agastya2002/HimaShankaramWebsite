import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Trustee from './Trustee.js'
import '../css/Home.css'
import { underline, trustee0, trustee1, trustee2, trustee3, trustee4, trustee5, trustee6} from '../images/index.js';
import { motion } from 'framer-motion';
import { animationThree, transition } from '../animations';

function Trustees() {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationThree}
      transition={transition}
      id="trustees"
    >
      <div className="trustees">
        <h1>Trustees</h1>
        <img src={underline} alt=''/>
      </div>
      <div>
        <Row className="trustee">
          <Col xs={12} md={12} lg={12}>
            <Trustee img={trustee0} name="G S RAJU" sub="Chairman" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={trustee1} name="K V V G DIWAKAR" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={trustee2} name="D RAVI VARMA" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={trustee3} name="D C P VISALA" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={trustee4} name="G PAVAN KUMAR" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={trustee5} name="P CHAYA" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={trustee6} name="K SUSEELA" />
          </Col>
        </Row>
      </div>
    </motion.div>
  );
}

export default Trustees;