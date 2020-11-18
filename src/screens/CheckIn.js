import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';


export default function CheckIn() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Check In</h3>
        </Col>
      </Row>
      <Row fluid>
        <Button className="text-left my-2 w-100">
          <Row className=" mb-2">
            <Col>
              <div className="float-left">Today</div>
            </Col>
            <Col>
              <div className="float-right"> 12:00 AM</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Restaurants</h2>
              <p>Address</p>
            </Col>
          </Row>
        </Button>
      </Row>
    </Container>
  );
}
