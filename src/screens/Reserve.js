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
      <Container class="p-5" fluid>
      <div class="row mt-3 container-fluid card">
          <div class="col">
            <div class="row">
              <div class="col">
                {/* <img src="#" alt="Image of Business" class="mx-auto" style="width: 100%; height: 400px;" /> */}
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>Description of business, ratings, average capacity, features and amenities, measures</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3 container-fluid card">
          <form>
            <div class="form-group">
              <label for="exampleInputName1">Name</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Phone Number</label>
              <input type="text" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" class="btn btn-danger">Reserve</button>
          </form>
        </div>
      </Container>
    </Container>
  );
}
