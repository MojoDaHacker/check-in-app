import React from 'react';
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default function Search({ navigation }) {
  return (
    <Container className="">
      <Row>
        <Col>
          <h3>Search</h3>
        </Col>
      </Row>
      <Container fluid>
        <Row>
          <Form.Control type="text" className="w-100" placeholder="Type to Search"/>
        </Row>
        <Row>
          <h4 className="mx-auto my-4">Your Favorites</h4>
        </Row>
        <Row>
          <Col className="p-0">
            <Link to="/reserve">
              <Button className="w-100 p-1">
              <Container fluid>
                <Row>
                    <div className="mr-auto">Rating</div>
                    <div>Current Capacity</div>
                </Row>
                <Row>
                  <Col className="p-0">
                    <div><h2>Open House</h2></div>
                    <div><p>Address</p></div>
                  </Col>
                </Row>
                <Row>
                  <p className="text-right w-100">More Details</p>
                </Row>
              </Container>
            </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
    );
  }
  
  {/* <div className="card my-2 container-fluid">
    <Row>
      <Col>
        <div className="float-left">Rating</div>
      </Col>
      <Col>
        <div className="float-right">Current Capacity</div>
      </Col>
    </Row>
    <Row>
      <h2>Store</h2>
      <p>Address</p>
    </Row>
    <Row>
      <p className="text-right w-100">More Details</p>
    </Row>
  </div>
  <div className="card my-2 container-fluid"> */}