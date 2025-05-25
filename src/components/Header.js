import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css2/Header.css'; // 👈 Import the CSS

const Header = () => {
  return (
    <Navbar className="dcc-navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="dcc-brand">
          <img
            src="/logo.png"
            width="35"
            height="35"
            className="d-inline-block align-top me-2"
            alt="School Logo"
          />
          Davao Central College
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto dcc-nav">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/academics">Academics</Nav.Link>
            <Nav.Link as={Link} to="/admission">Admission</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
