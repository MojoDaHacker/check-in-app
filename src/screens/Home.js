import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import "../assets/stylesheet.css";


export default function Home({ navigation }) {
  return (
    <Container className="">
      <Row>
        <Col class= "heading">
          Welcome, User
        </Col>
      </Row>
      <Row class="p-5">

            <div class="app btn btn-primary">
              <h3>Nearby Locations</h3>
            </div>
            <div class="app btn btn-primary">
              <h3>Need to Check In?</h3>
            </div>

          

            <div class="app btn btn-primary">
              <h3>Search</h3>
            </div>
            <div class="app btn btn-primary">
              <h3>Settings</h3>
            </div>


      </Row>
    </Container>
  );
}
