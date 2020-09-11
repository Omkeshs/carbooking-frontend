import React, { useState } from "react";
import "../assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Nav } from "react-bootstrap";
import BookCabs from "./BookCab";
import History from "./History";

function Home() {
  const [isLoad, load] = useState("home");
  console.log(isLoad);
  return (
    <div>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey={`#${isLoad}`}>
            <Nav.Item>
              <Nav.Link href="#home" onClick={() => load("home")}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#bookcabs" onClick={() => load("bookcabs")}>
                Book Cab
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#history" onClick={() => load("history")}>
                History
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          {isLoad === "home" ? (
            <div>
              <Card.Title>Book a Cabs</Card.Title>
              <Card.Text>Book a Cab to your destination in town</Card.Text>
              <Button
                variant="primary"
                href="#bookcabs"
                onClick={() => load("bookcabs")}
              >
                Book a cab
              </Button>
            </div>
          ) : isLoad === "bookcabs" ? (
            <div>
              <Card.Text>Book a Cab to your destination in town</Card.Text>
              <BookCabs />
            </div>
          ) : (
            <div>
              <History userId={1} />
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
