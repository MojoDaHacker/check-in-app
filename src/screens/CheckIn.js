import React, {useContext, useState} from 'react';
import {Container, Row, Col, Button, Modal, Image} from 'react-bootstrap';
import StoreContext from "../contexts/store.js";
import QRCODE from "../assets/QR_Code.png";



export default function CheckIn() {
  const storeContext = useContext(StoreContext);
  const eventStore = storeContext.eventKit;
  const [shouldShow, setShouldShow] = useState(false)

  const handleShow = () => setShouldShow(true)
  const handleClose = () => setShouldShow(false)

  return (
    <Container>
      <Row>
        <Col>
          <h3>Check In</h3>
        </Col>
      </Row>
      <Row fluid>
        <Modal show={shouldShow} onHide={handleClose}>
          <Modal.Body>
            <Image src={QRCODE} alt="QR Code" fluid/>
            <p>Scan to Check In</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Button className="text-left my-2 w-100" onClick={handleShow}>
          <Row className=" mb-2">
            <Col>
              <div className="float-left">Today</div>
            </Col>
            <Col>
              <div className="float-right"> 12:00 AM</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Restaurants</h2>
              <p>Address</p>
            </Col>
          </Row>
        </Button>
        {eventStore.reservedEvents.map((val, i) => (
          <Button key={i} className="text-left my-2 w-100">
            <Row className=" mb-2">
              <Col>
                <div className="float-left">{val.capactiy}</div>
              </Col>
              <Col>
                <div className="float-right"> 12:00 AM</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>{val.venue}</h2>
                <p>{val.address}</p>
              </Col>
            </Row>
          </Button>
        ))}
      </Row>
    </Container>
  );
}
