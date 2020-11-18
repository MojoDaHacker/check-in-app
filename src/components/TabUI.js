import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {HouseDoorFill, PersonCircle, Check2, GeoAltFill, Search} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'


export default function Tabs({ navigation }) {
  return (
    <Container className="border-top">
      <Row className="py-3">
        <Col>
          <Link to="/"><Button><HouseDoorFill size="" /></Button></Link>
        </Col>
        <Col>
          <Link to="/locations"><Button><GeoAltFill size="" /></Button></Link>
        </Col>
        <Col>
          <Link to="/checkin"><Button><Check2 size="" /></Button></Link>
        </Col>
        <Col>
          <Link to="/search"><Button><Search size="" /></Button></Link>
        </Col>
        <Col>
          <Link to="/settings"><Button><PersonCircle size="" /></Button></Link>
        </Col>
      </Row>
    </Container>
  );
}
