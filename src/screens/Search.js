import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';


export default function Home({ navigation }) {
  return (
    <Container className="">
      <Row>
        <Col>
          <h3 class="heading">Search</h3>
        </Col>
      </Row>
      <Container fluid>
        <Row>
          <Form.Control type="text" class="w-100" placeholder="Type to Search"/>
        </Row>
        <Row>
          <h4 class="mx-auto my-4">Your Favorites</h4>
          <div class="card my-2 container-fluid">
            <Row>
              <Col>
                <div class="float-left">Rating</div>
              </Col>
              <Col>
                <div class="float-right">Current Capacity</div>
              </Col>
            </Row>
            <Row>
              <h2>Open House</h2>
              <p>Address</p>
            </Row>
            <Row>
              <p class="text-right w-100">More Details</p>
            </Row>
          </div>
          <div class="card my-2 container-fluid">
            <Row>
              <Col>
                <div class="float-left">Rating</div>
              </Col>
              <Col>
                <div class="float-right">Current Capacity</div>
              </Col>
            </Row>
            <Row>
              <h2>Store</h2>
              <p>Address</p>
            </Row>
            <Row>
              <p class="text-right w-100">More Details</p>
            </Row>
          </div>
          <div class="card my-2 container-fluid">
            <Row>
              <Col>
                <div class="float-left">Rating</div>
              </Col>
              <Col>
                <div class="float-right">Current Capacity</div>
              </Col>
            </Row>
            <Row>
              <h2>Nail Salon</h2>
              <p>Address</p>
            </Row>
            <Row>
              <p class="text-right w-100">More Details</p>
            </Row>
          </div>
        </Row>
      </Container>
    </Container>
  );
}
