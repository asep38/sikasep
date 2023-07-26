import React from "react";

import "./navbars.css";

import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <>
      <Navbar expand="lg" className=" navbars">
        <Container className="cNav">
          <Navbar.Brand as={Link} to="/">
            <h1>Sikasep</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Button as={Link} to="/contact">
              Contact Us
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
