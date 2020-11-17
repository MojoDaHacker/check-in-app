import React from 'react';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const userName = "CheckIn";
const pass = "CheckIn1";


export default function Register({ navigation }) {
  return (
    <Container className="">
      <Row>
        <Col>
          Sign Up
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <label for="exampleInputName1">Name</label>
              <Form.Control type="email" class="text-center" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Name"/>
            </Form.Group>
            <Form.Group>
              <label for="exampleInputEmail1">Email address</label>
              <Form.Control type="email" class="text-center" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </Form.Group>
            <Form.Group>
              <label for="exampleInputPassword1">Date of Birth</label>
              <Form.Control type="password" class="text-center" placeholder="Date of Birth" id="exampleInputPassword1"/>
            </Form.Group>
            <Form.Group>
              <label for="exampleInputPassword1">Password</label>
              <Form.Control type="password" class="text-center" placeholder="Password" id="exampleInputPassword1"/>
            </Form.Group>
            <Button type="submit" class="btn btn-danger mx-auto">Sign Up</Button>
            <Link to="/"><Button class="btn btn-danger mx-auto">Already Have Account?</Button></Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}