import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default function Locations({ navigation }) {
  return (
    <Container>
      <Row>
        <Col>
<<<<<<< HEAD
        <h3 class="heading">Nearby Locations</h3>
          
=======
          <h3>Nearby Locations</h3>
        </Col>
      </Row>
      <Row class="mt-3" fluid>
        <Col>
          <Link to="/reserve">
            <Button className="w-100 p-1">
            <Container fluid>
              <Row>
                  <div className="mr-auto">Rating</div>
                  <div>Current Capacity</div>
              </Row>
              <Row>
                <Col className="p-0 text-left">
                  <div><h2>Open House</h2></div>
                  <div><p>Address</p></div>
                </Col>
              </Row>
            </Container>
          </Button>
          </Link>
>>>>>>> c506f3cfb14627fba39ba0311ea066ed89cb81ab
        </Col>
      </Row>
    </Container>
  );
}
