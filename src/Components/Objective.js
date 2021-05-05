import React from 'react'
import {Row, Col} from 'react-bootstrap'
import '../css/Objective.css'

function Objective({ icon, description}) {
  return (
    <div>
      <Row className="rowItems">
        <Col md={6} xs={12} className="pic">
          {icon}
        </Col>
        <Col className="descr">
          <p>{description}</p>
        </Col>
      </Row>
    </div>
  )
}

export default Objective

