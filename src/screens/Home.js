import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Home({ navigation }) {
  return (
    <Container className="">
      <Row>
        <Col class= "heading">
          Welcome, User
        </Col>
      </Row>
      <Row>
        <Col className="">
          <Link to="/locations">
            <Button class="w-100 h-100 card text-center p-3">
              <p>Nearby Locations</p>
            </Button>
          </Link>
        </Col>
        <Col className="w-100">
          <Link to="/checkin">
            <Button class=" w-100 h-100 card text-center p-3">
              <p>Check In?</p>
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="w-100">
          <Link to="/search">
            <Button class="w-100 h-100 card text-center p-3">
              <p>Search</p>
            </Button>
          </Link>
        </Col>
        <Col className="w-100">
          <Link to="/settings">
            <Button class="w-100 h-100 card text-center p-3">
              <p>Settings</p>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
