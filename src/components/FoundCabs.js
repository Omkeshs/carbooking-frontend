import React from "react";
import { Button, Modal } from "react-bootstrap";

function FoundCabs(props) {
  console.log(props.details);
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={() => props.cancleRide()}>
          <Modal.Title>Cab Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Cab Number : <strong>{props.details.cab_number}</strong> <br />
          Driver Mobile Number : <strong>{props.details.driver_mobile}</strong>
          <br />
          Driver Name : <strong>{props.details.driver_name}</strong> <br />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.cancleRide()}>
            Cancle Ride
          </Button>
          <Button variant="primary">Book Cab</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default FoundCabs;
