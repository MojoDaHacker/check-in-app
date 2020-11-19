import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';




export default function Reserve(props) {
  const event = props.reserve;

  const reserveEvent = e => {
    e.preventDefault()
    console.log(props)
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reserve</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <img src="#" alt="Image of Business" className="mx-auto" style="width: 100%; height: 400px;" /> */}
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p>Description of business, ratings, average capacity, features and amenities, measures</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Form onSubmit={reserveEvent}>
          <Form.Group>
            <label for="exampleInputName1">Name</label>
            <Form.Control type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </Form.Group>
          <Form.Group>
            <label for="exampleInputEmail1">Email address</label>
            <Form.Control type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </Form.Group>
          <Form.Group>
            <label for="exampleInputPassword1">Phone Number</label>
            <Form.Control type="text" className="form-control" id="exampleInputPassword1"/>
          </Form.Group>
          <Button type="submit" className="btn btn-primary">Submit Reservation</Button>
        </Form>
      </Row>
    </Container>
  );
}
