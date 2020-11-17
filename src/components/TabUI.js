import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {List, PersonCircle} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'


export default function Tabs({ navigation }) {
  return (
    <Container className="">
      <Row className="py-3">
        <Col xs={3}><Button><List size="75%" /></Button></Col>
        <Col></Col>
        <Col xs={3}><Link to="/settings"><Button><PersonCircle size="75%" /></Button></Link></Col>
      </Row>
    </Container>
  );
}
