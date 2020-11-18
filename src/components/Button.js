import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

const CheckInAppButton = props => (
  <Button className="w-100 p-1">
    <Container fluid>
      <Row>
          <div className="mr-auto">Rating</div>
          <div>Current Capacity</div>
      </Row>
      <Row>
        <Col className="p-0">
          <div><h2>Open House</h2></div>
          <div><p>Address</p></div>
        </Col>
      </Row>
      <Row>
        <p className="text-right w-100">More Details</p>
      </Row>
    </Container>
  </Button>
)

export default CheckInAppButton