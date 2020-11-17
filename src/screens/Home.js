import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';


export default function Home({ navigation }) {
  return (
    <Container className="">
      <Row>
        <Col>
          Welcome, User
        </Col>
      </Row>
      <Row class="p-5">
        <Row>
          <Col class="mb-3">
            <div class="card text-center h-75 p-3">
              <h3>Nearby Locations</h3>
            </div>
            <div class="card text-center h-75 p-3">
              <h3>Need to Check In?</h3>
            </div>
          </Col>
          
          <Col class="mb-3">
            <div class="card text-center h-75 p-3">
              <h3>Search</h3>
            </div>
            <div class="card text-center h-75 p-3">
              <h3>Settings</h3>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
