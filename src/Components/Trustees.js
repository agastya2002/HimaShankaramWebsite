import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Trustee from './Trustee.js'
import '../css/Home.css'
import { underline, card3} from '../images/index.js';

function Trustees() {
  return (
    <div id="trustees" >
      <div className="trustees">
        <h1>Trustees</h1>
        <img src={underline} alt=''/>
      </div>
      <div>
        <Row className="trustee">
          <Col xs={12} md={12} lg={12}>
            <Trustee img={card3} name="Chairman" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={card3} name="Trustee" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={card3} name="Trustee" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={card3} name="Trustee" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={card3} name="Trustee" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={card3} name="Trustee" />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Trustee img={card3} name="Trustee" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Trustees;