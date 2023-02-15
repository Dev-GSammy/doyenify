import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './img/doyen1.png';
import Button from 'react-bootstrap/Button';

const Header: React.FC = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={Logo} width="170" height="auto" className="d-inline-block align-top"/>{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/" className="ms-5">Home</Nav.Link>
            <Nav.Link href="#features" className="ms-5">Our Work</Nav.Link>
            <Nav.Link href="/About_us"className="ms-5">About Us</Nav.Link>
            <Nav.Link href="/Services"className="ms-5">What We Do</Nav.Link>
            <Nav.Link href="#team"className="ms-5">Our Team</Nav.Link>
            <Button href="#" className="ms-5" variant="success">Contact Us</Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
