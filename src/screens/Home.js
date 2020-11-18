import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Home({ navigation }) {
  return (
    <Container className="">
      <Row className="my-2">
        <Col>
          <h3>Welcome, User</h3>
        </Col>
      </Row>
      <Row className="my-2">
        <Col className="">
          <Link to="/locations">
            <Button className=" text-center p-3">
              <p>Nearby Locations</p>
            </Button>
          </Link>
        </Col>
        <Col className="">
          <Link to="/checkin">
            <Button className=" text-center p-3">
              <p>Check In?</p>
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="my-2">
        <Col className="w-100">
          <Link to="/search">
            <Button className=" text-center p-3">
              <p>Search</p>
            </Button>
          </Link>
        </Col>
        <Col className="w-100">
          <Link to="/settings">
            <Button className=" text-center p-3">
              <p>Settings</p>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
