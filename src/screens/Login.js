import React, {useState, useContext} from 'react';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import StoreContext from "../contexts/store.js";
import {Link} from 'react-router-dom';
import CheckIn from '../assets/CheckIn_Logo_Text.png'



export default function Login({signIn}) {
  const storeContext = useContext(StoreContext);
  const [isUserAuthorized, authorizeUser] = useState(null);
  const [userName, changeName] = useState("");
  const [passWord, changePass] = useState("");
  
  const handleSubmission = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(handleAuthorization()){ 
      authorizeUser(true);

      setTimeout(() => {
        signIn(true);
      }, 1500);
    } else {
      changeName("");
      changePass("");
      authorizeUser(false);
    }
  }
  const handleAuthorization = props => { 
    for (const obj of storeContext.users){
      if(obj.user === userName){
        if (obj.pwd === passWord) {
          return 1
        }
      }
    }
    return 0
  }
  
  return (
    <>
      <Container className="my-auto">
        {/* <Row>
          <Col>
            Welcome, User
          </Col>
        </Row> */}
        <div> 
          <img src={CheckIn} width="100%" height="100%"/>
        </div>
        <Row>
          <Col>
            <Form noValidate onSubmit={handleSubmission} validated={isUserAuthorized}>
              <Form.Group className="my-3">
                <Form.Control isInvalid={isUserAuthorized === false} value={userName} type="text" className="text-center" placeholder="Username" onChange={e => changeName(e.target.value)}/>
                <Form.Control.Feedback type="invalid">Username is invalid. Please try again!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Control isInvalid={isUserAuthorized === false} value={passWord} type="password" className="text-center" placeholder="Password" onChange={e => changePass(e.target.value)}/>
                <Form.Control.Feedback type="invalid">Password is invalid. Please try again!</Form.Control.Feedback>
              </Form.Group>
              <Form.Row>
                <div className="w-100 text-center mb-3">
                  <Button type="submit" className="mx-auto btn btn-primary">Sign In</Button> 
                </div>
                <div className="w-100 text-center">
                  <Link className="w-100" to="/register"><Button className="w-auto btn btn-primary">Sign Up</Button></Link>
                </div>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
