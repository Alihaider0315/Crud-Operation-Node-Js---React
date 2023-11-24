import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Crud Application</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Add User</Nav.Link>
          <Nav.Link href="/fetchuser">View Data</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;
