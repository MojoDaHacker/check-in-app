import React, {useContext} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import StoreContext from "../contexts/store.js";


export default function Locations() {
  const storeContext = useContext(StoreContext);
  const eventStore = storeContext.eventKit 

  console.log(eventStore)

  return (
    <Container>
      <Row>
        <Col>
          <h3>Nearby Locations</h3>
        </Col>
      </Row>
      <Row className="mt-3" fluid>
        <Col>
          <Link to="/reserve">
            <Button className="mb-3 w-100 p-1">
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
          {eventStore.events.map((val, i) => (
            <Link to="/reserve" {...eventStore}>
              <Button className="mb-3 w-100 p-1">
                <Container fluid>
                  <Row>
                      <div className="mr-auto">{`Rating: ${val.rating} / 5`}</div>
                      <div>{`Capacity ${val.curCapacity} / ${val.maxCapacity}`}</div>
                  </Row>
                  <Row>
                    <Col className="p-0 text-left">
                      <div><h2>{val.venue}</h2></div>
                      <div><p>{val.address}</p></div>
                    </Col>
                  </Row>
                </Container>
              </Button>
            </Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
