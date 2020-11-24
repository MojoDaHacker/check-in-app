import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CheckIn from '../assets/CheckIn_Logo_Text.png'


export default function Home({ navigation }) {
  return (
    <Container className="">
        <div> 
          <img src={CheckIn} width="100%" height="100%"/>
        </div>
      <Row className="my-2">
        <Col>
          <h3 className="heading">Welcome, User</h3>
        </Col>
      </Row>
      <Row className="my-2">
        <Col className="">
          <Link to="/locations">
            <Button className="">
              <p className="clickable">Nearby</p>
            </Button>
          </Link>
        </Col>
        <Col className="">
          <Link to="/checkin">
            <Button className="">
              <p className="clickable">Check In?</p>
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="">
          <Link to="/search">
            <Button className="">
              <p className="clickable">Search</p>
            </Button>
          </Link>
        </Col>
        <Col className="">
          <Link to="/settings">
            <Button className="">
              <p className="clickable">Settings</p>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
