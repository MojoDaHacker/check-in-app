import React from 'react';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';

const userName = "CheckIn";
const pass = "CheckIn1";


export default function Login({ navigation }) {
  return (
    <Container className="my-auto">
      <Row>
        <Col>
          Welcome, User
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group class="my-4">
              <Form.Control type="email" class="text-center " placeholder="Username"/>
            </Form.Group>
            <Form.Group class="form-group my-4">
              <Form.Control type="password" class="text-center" placeholder="Password"/>
            </Form.Group>
            <Button type="submit" class="btn btn-danger">Sign In</Button>
            <Button type="submit" class="btn btn-danger">Sign Up</Button>
            <Button type="submit" class="btn btn-danger">Business</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
