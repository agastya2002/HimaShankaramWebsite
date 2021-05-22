import React from 'react'
import {Row, Col} from 'react-bootstrap'
import FlipCard from './FlipCard.js'
import '../css/Home.css'
import { underline, card1, card2, card3, card4} from '../images/index.js';
import { motion } from 'framer-motion';
import { animationThree, transition } from '../animations';


function Vision() {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationThree}
      transition={transition}
      id="vision" 
    >
      <div className="vision">
        <h1>Vision</h1>
        <img src={underline} alt=''/>
      </div>
      <div>
        <Row>
          <Col xs={12} md={6} lg={4} xl={3}>
            <FlipCard img={card1} title="Home for Destitutes" descr="Our Future vision will be to establish, constitute and run a HOME for DESTITUTE men, women and/or children, who had been neglected by their kith and kin or orphans, having no means to lead decent lives. It is a harsh fact that elders/parents who are the foundation for the success and development of their children are facing severe hardships during twilight of their life time since the same children are abandoning them when they require due care and support. The Trust shall endeavour to render service to the needy, destitute personnel in such situations"/>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <FlipCard img={card2} title="Health Care Programs" descr="Poor Communities living in remote areas with little or no access to primary medical care need basic medical services available in their location, avoiding necessity to travel for basic medical needs. Further, still, in some poor remote communities, there exists certain lack of awareness to prevent certain deceases & disorders. The Trust envisions to identify such needy remote, poor communities and organize medical camps and awareness programs to address certain issues both in curative & preventive ways "/>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <FlipCard img={card3} title="Value based Education" descr="Spirit of Excellence in persuasion of primary, secondary and collegiate education is very essential in youth to be able to become employable upon completion of education. Further, value based education is essential to facilitate the youth to contribute to society upon completion of education. The Trust envisions to award scholarships to meritorious, extend assistance to bright needy students and organize character building programs for making the education to be value based  "/>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <FlipCard img={card4} title="Skill Training" descr="The Trust envisions to facilitate imparting training and skills to the needy to equip themselves to be able to win their livelihood on their own"/>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
}

export default Vision;