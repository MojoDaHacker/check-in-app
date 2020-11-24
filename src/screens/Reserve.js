import React, {useContext} from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {useParams, useHistory} from 'react-router-dom';
import StoreContext from "../contexts/store.js";




export default function Reserve(props) {
  const storeContext = useContext(StoreContext);
  const eventStore = storeContext.eventKit 
  const {id} = useParams();
  const history = useHistory();

  const reserveEvent = e => {
    e.preventDefault()

    eventStore.addEvent(eventStore.events[id])

    history.goBack();
    
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
            <Form.Label htmlFor="exampleInputName1">Name</Form.Label>
            <Form.Control type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
            <Form.Control type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="exampleInputPassword1">Phone Number</Form.Label>
            <Form.Control type="text" className="form-control" id="exampleInputPassword1"/>
          </Form.Group>
          <Button type="submit" className="btn btn-primary">Submit Reservation</Button>
        </Form>
      </Row>
    </Container>
  );
}
