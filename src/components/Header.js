import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {ArrowLeft} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'


export default function Header({ navigation }) {
  return (
    <Container className="">
      <Row className="py-3">
        <Col xs={3}><Link ><Button><ArrowLeft size="50%" /></Button></Link></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
