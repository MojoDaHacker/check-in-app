import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';


export default function Home({ navigation }) {
  return (
    <Container className="my-auto">
      <Row>
        <Col>
          Check In
        </Col>
      </Row>
      <Container class="p-5" fluid>
        <div class="card my-2 container-fluid">
          <div class="row mb-2">
            <div class="col">
              <div class="float-left">Today</div>
            </div>
            <div class="col">
              <div class="float-right"> 12:00 AM</div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h2>Restaurants</h2>
              <p>Address</p>
            </div>
          </div>
        </div>
        <div class="card my-2 container-fluid">
          <div class="row mb-2">
            <div class="col">
              <div class="float-left">Saturday</div>
            </div>
            <div class="col">
              <div class="float-right"> 4:00 PM</div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h2>Open House</h2>
              <p>Address</p>
            </div>
          </div>
        </div>
        <div class="card my-2 container-fluid">
        <div class="row mb-2">
          <div class="col">
            <div class="float-left">Monday</div>
          </div>
          <div class="col">
            <div class="float-right"> 10:00 AM</div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2>Meeting</h2>
            <p>Address</p>
          </div>
        </div>
      </div>
      </Container>
    </Container>
  );
}
