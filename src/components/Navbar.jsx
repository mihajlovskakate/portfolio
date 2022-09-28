import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavigationBar() {
  return (
    <Navbar className="nav-bar" expand="lg">
    <Container>
      <Navbar.Brand className = "brand-text" href="#home">
            <i className="fa-brands fa-rocketchat"></i>{' '}
            LinguaChat</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/Sign Up">Sign Up</Nav.Link>
          <Nav.Link href="/Pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavigationBar