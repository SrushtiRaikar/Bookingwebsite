import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

export const Header = () => {
  return (
    <>
      <div>
        <Navbar className="nav" variant="dark" >
          <Container >
            <Navbar.Brand varient="dark" href="#home">Sightseer</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end" varient="dark">
              {/* <Navbar.Text >
                Sign in: <a href="#login">Click here</a><br></br>
              </Navbar.Text> */}
              <Navbar.Text>
                <img style={{ width: '10%' }} src="world-removebg-preview.png" />
                <img style={{ width: '3%' }} src="person.png" />
                Login: <a href="#login">Click Here</a>
              </Navbar.Text>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* <div>
    <Container>
      <Row>
        <Col xs={1}>
        <Button  id="b1" variant="dark">Flights</Button>
        </Col>
        <Col xs={1}>
        <Button id="b1"variant="dark">Hotels</Button>
        </Col>
        <Col xs={0}>
        <Button id="b1" variant="dark">Car Hire</Button></Col>
      </Row>
      
    </Container>
    </div> */}
    </>
  );
};