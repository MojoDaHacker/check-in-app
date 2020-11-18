import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Home({ navigation }) {
  return (
    <Container className="">
      <Row>
        <Col>
          <h3 class="heading">Welcome, User</h3>
        </Col>
      </Row>
      <Row>
        <Col className="">
          <Link to="/locations">
            <Button class="">
              <p class="clickable">Nearby</p>
            </Button>
          </Link>
        </Col>
        <Col className="">
          <Link to="/checkin">
            <Button class="">
              <p class="clickable">Check In?</p>
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="">
          <Link to="/search">
            <Button class="">
              <p class="clickable">Search</p>
            </Button>
          </Link>
        </Col>
        <Col className="">
          <Link to="/settings">
            <Button class="">
              <p class="clickable">Settings</p>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
