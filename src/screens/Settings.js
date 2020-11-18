import React from 'react';
import {Container, Row, Col, Button, Jumbotron, ListGroup} from 'react-bootstrap';


export default function Settings({ navigation }) {
  return (
    <Container className="">
      <Row>
        <Col>
          <h3>Settings</h3>
        </Col>
      </Row>
      <Row class="p-0" fluid>
        <Jumbotron className="w-100 p-3">
          <h3>Account</h3>
          <ListGroup>
            <ListGroup.Item className="border-left-0 border-right-0 border-top-0 bg-color-0">Edit Profile</ListGroup.Item>
            <ListGroup.Item className="border-left-0 border-right-0 border-top-0 bg-color-0">Name of User</ListGroup.Item>
          </ListGroup>
        </Jumbotron>
        <Jumbotron className="w-100 p-3">
          <h3>App Settings</h3>
          <ListGroup>
            <ListGroup.Item className="border-left-0 border-right-0 border-top-0 bg-color-0">Notifications</ListGroup.Item>
            <ListGroup.Item className="border-left-0 border-right-0 border-top-0 bg-color-0">Light or Dark Theme</ListGroup.Item>
            <ListGroup.Item className="border-left-0 border-right-0 border-top-0 bg-color-0">Text Size</ListGroup.Item>
          </ListGroup>
        </Jumbotron>
        <Jumbotron className="w-100 p-3">
          <h3>Support</h3>
          <ListGroup>
            <ListGroup.Item className="border-left-0 border-right-0 border-top-0 bg-color-0">About Us</ListGroup.Item>
            <ListGroup.Item className="border-left-0 border-right-0 border-top-0 bg-color-0">Contact Us</ListGroup.Item>
          </ListGroup>
        </Jumbotron>
      </Row>
    </Container>
  );
}
