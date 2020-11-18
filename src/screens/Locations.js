import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';


export default function Home({ navigation }) {
  return (
    <Container className="">
      <Row>
        <Col>
        <h3 class="heading">Nearby Locations</h3>
          
        </Col>
      </Row>
      <Container class="mt-3" fluid>
        <Row>
          <div class="card my-2 container-fluid">
            <div class="row">
              <div class="col">
                <div class="float-left">Rating</div>
              </div>
              <div class="col">
                <div class="float-right">Current Capacity</div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h2>Restaurants</h2>
                <p>Address</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p class="text-right w-100">More Details</p>
              </div>
            </div>
          </div>
          <div class="card my-2 container-fluid">
            <div class="row">
              <div class="col">
                <div class="float-left">Rating</div>
              </div>
              <div class="col">
                <div class="float-right">Current Capacity</div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h2>Open House</h2>
                <p>Address</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p class="text-right w-100">More Details</p>
              </div>
            </div>
          </div>
          <div class="card my-2 container-fluid">
            <div class="row">
              <div class="col">
                <div class="float-left">Rating</div>
              </div>
              <div class="col">
                <div class="float-right">Current Capacity</div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h2>Store</h2>
                <p>Address</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p class="text-right w-100">More Details</p>
              </div>
            </div>
          </div>
          <div class="card my-2 container-fluid">
            <div class="row">
              <div class="col">
                <div class="float-left">Rating</div>
              </div>
              <div class="col">
                <div class="float-right">Current Capacity</div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h2>Nail Salon</h2>
                <p>Address</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p class="text-right w-100">More Details</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
}
