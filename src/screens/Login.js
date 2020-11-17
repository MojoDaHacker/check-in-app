import React from 'react';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const userName = "CheckIn";
const pass = "CheckIn1";


export default function Login({ navigation }) {
  return (
    <>
      <Container className="">
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
              <Link to="/register"><Button class="btn btn-danger">Sign Up</Button></Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
