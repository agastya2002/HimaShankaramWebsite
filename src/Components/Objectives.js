import React from 'react'
import Objective from './Objective.js'
import {Row, Col} from 'react-bootstrap'
import '../css/Home.css'
import { underline} from '../images/index.js';
import { motion } from 'framer-motion';
import { animationThree, transition } from '../animations';

function Objectives() {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationThree}
      transition={transition}
      id="objectives"
      className="objectives"
    >
      <h1>Our Main Objectives</h1>
      <img src={underline} alt=''/>
      <div className="objRow">
      <Row className="objRowSub">
        <Col xs={12} md={6} lg={4}>
          <Objective icon={<i class="fa fa-building icon" aria-hidden="true"/>} description="To support schools, orphanages and widow homes." />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Objective icon={<i class="fa fa-road icon" aria-hidden="true"/>} description="To support establishing and maintaining public amenities" />
        </Col>
        <Col xs={12} md={6} lg={4}>
        <Objective icon={<i class="fa fa-ambulance icon" aria-hidden="true"/>} description="To provide relief measures during natural calamities." />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Objective icon={<i class="fa fa-medkit icon" aria-hidden="true"/>} description="To provide food, medicine and clothing to the poor " />
        </Col>
        <Col xs={12} md={6} lg={4}>
        <Objective icon={<i class="fa fa-handshake-o icon" aria-hidden="true"/>} description="To support other charitable organizations" />
        </Col>
        <Col xs={12} md={6} lg={4}>
        <Objective icon={<i class="fa fa-money icon" aria-hidden="true"/>} description="To provide support to meritorius students in need" />
        </Col>
      </Row>
      </div>
    </motion.div>
  )
}

export default Objectives;