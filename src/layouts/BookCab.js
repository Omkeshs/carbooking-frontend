import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddressList from "../data/Address.js";
import FoundCabs from "../components/FoundCabs";
import {
  Button,
  Card,
  Container,
  InputGroup,
  DropdownButton,
  Dropdown,
  Spinner,
} from "react-bootstrap";

const axios = require("axios").default;

function BookCabs() {
  const [pickupArea, selectPickup] = useState({
    Area: "Select Pick Up Point",
    Latitude: 0,
    Longitude: 0,
  });
  const [dropArea, selectDrop] = useState({
    Area: "Select Drop Point",
    Latitude: 0,
    Longitude: 0,
  });

  const [cabDetails, setCabDetails] = useState({
    isFound: false,
    status: false,
    booking_OTP: "",
    cab_number: "",
    driver_name: "",
    driver_mobile: "",
  });

  const [isSearched, searchCab] = useState(false);

  function SearchCab() {
    var bookRequest = {
      user_id: 1,
      pickup_loc: pickupArea,
      drop_loc: dropArea,
    };
    axios
      .post("http://localhost:8080/bookcab", JSON.stringify(bookRequest))
      .then(function (response) {
        if (response.status === 200) {
          setCabDetails({
            ...cabDetails,
            isFound: true,
            booking_OTP: response.data.booking_id,
            cab_number: response.data.cab_no,
            driver_name: response.data.driver_name,
            driver_mobile: response.data.driver_mob,
          });
        } else if (response.status === 204) {
          setCabDetails({
            ...cabDetails,
            isFound: true,
            status: "No Found cab",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <div>
      {cabDetails.isFound === true && cabDetails.status === false ? (
        <>
          <FoundCabs
            details={cabDetails}
            cancleRide={() =>
              setCabDetails({
                ...cabDetails,
                isFound: false,
              })
            }
          />
        </>
      ) : cabDetails.status ? (
        <>CAB NOT FOUND</>
      ) : (
        <Container>
          <Card className="bg-dark text-white" style={{ width: "30rem" }}>
            <Card.Img
              src="https://cms-web.olacabs.com/00000000383.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay className="mb-3">
              <Card.Title>Choose Pick Point and Drop Point</Card.Title>
              <InputGroup className="mb-3">
                <DropdownButton
                  as={InputGroup.Prepend}
                  variant="outline-secondary bg-dark text-white"
                  title={pickupArea.Area}
                  id="input-group-dropdown-1"
                >
                  {/* PICK-UP POINT */}
                  {AddressList.map((val, index) => {
                    return (
                      <Dropdown.Item
                        key={index}
                        onClick={() => selectPickup(val)}
                        disabled={dropArea.Area === val.Area ? true : false}
                      >
                        {val.Area}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </InputGroup>

              <InputGroup className="mb-3">
                <DropdownButton
                  as={InputGroup.Prepend}
                  variant="outline-secondary bg-dark text-white"
                  title={dropArea.Area}
                  id="input-group-dropdown-1"
                >
                  {/* DROP-POINT */}
                  {AddressList.map((val, index) => {
                    return (
                      <Dropdown.Item
                        key={index}
                        onClick={() => selectDrop(val)}
                        disabled={pickupArea.Area === val.Area ? true : false}
                      >
                        {val.Area}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </InputGroup>
              <Button
                disabled={
                  dropArea.Latitude === 0 || pickupArea.Latitude === 0
                    ? true
                    : false
                }
                onClick={() => {
                  searchCab(true);
                  SearchCab();
                }}
              >
                Book a cab
                {isSearched === true && cabDetails.isFound === true ? (
                  <Spinner
                    className="mb-1 mr=1"
                    size="sm"
                    animation="border"
                  ></Spinner>
                ) : null}
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Container>
      )}
    </div>
  );
}

export default BookCabs;
