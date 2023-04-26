import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import { Link } from 'react-router-dom';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/Login">
        <button class="btn btn-success my-2 my-sm-0" type="submit">Login </button>
        </Link>
        <Link to="/Register">
        <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Register</button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;