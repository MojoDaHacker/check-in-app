import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';


export default function Home({ navigation }) {
  return (
    <Container className="my-auto">
      <Row>
        <Col>
          Welcome, User
        </Col>
      </Row>
      <Container class="p-5" fluid>
        <div class="row">
          <div class="col">
            <h3>Account</h3>
            <div class="card my-2">
              <h3>Edit Profile</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h3>App Settings</h3>
            <div class="card my-2">
              <h3>Notifications</h3>
              <h3>Light or Dark Theme</h3>
              <h3>Text Size</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h3>Support</h3>
            <div class="card my-2">
              <h3>About Us</h3>
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
