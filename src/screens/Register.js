import React, {useState, useContext} from 'react';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import StoreContext from "../contexts/store.js";
import CheckIn from '../assets/CheckIn_Logo_Text.png'


export default function Register({signIn}) {
  const storeContext = useContext(StoreContext);
  const [registrationValidated, validate] = useState(null);
  const [username, changeName] = useState("");
  const [password, changePass] = useState("");
  const [email, changeEmail] = useState("");

  
  const handleSubmission = (e) => {
    e.preventDefault();
    
    //check email
    if((username.includes("@") || username.includes(".com")) !== false) {
      validate(false);
      console.log(false)
      return 0
    }

    validate(true)
    setTimeout(() => {
      signIn(true);
    }, 1500);

    return 1
  }

  return (
    <Container className="my-auto">
      {/* <Row>
        <Col>
          Sign Up
        </Col>
      </Row> */}
      <div> 
        <img src={CheckIn} width="100%" height="100%"/>
      </div>
      <Row>
        <Col>
          <Form onSubmit={handleSubmission} validated={registrationValidated}>
            <Form.Group>
              <Form.Control isInvalid={registrationValidated === false} type="text" className="text-center"  aria-describedby="emailHelp" placeholder="Name"/>
            </Form.Group>
            <Form.Group>
              <Form.Control isInvalid={registrationValidated === false} type="email" className="text-center" placeholder="Email" aria-describedby="emailHelp"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              <Form.Control.Feedback type="invalid">Email not valid!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control isInvalid={registrationValidated === false} type="password" className="text-center" placeholder="Date of Birth"/>
            </Form.Group>
            <Form.Group>
              <Form.Control isInvalid={registrationValidated === false} type="password" className="text-center" placeholder="Password"/>
            </Form.Group>
            <Form.Row>
              <div className="w-100 text-center mb-3">
                <Button type="submit" className="mx-auto btn btn-primary">Register</Button> 
              </div>
              <div className="w-100 text-center">
                <Link className="w-100" to="/"><Button className="w-auto btn btn-primary">Already Have An Acoount</Button></Link>
              </div>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}