import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './img/doyen1.png';
import Button from 'react-bootstrap/Button';

const Header: React.FC = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#e6ffcc" }} variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img alt="" src={Logo} width="170" height="auto" className="d-inline-block align-top"/>{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/" className="ms-5 text-black">Home</Nav.Link>
            <Nav.Link href="/Ourwork" className="ms-5 text-black">Our Work</Nav.Link>
            <Nav.Link href="/About_us" className="ms-5 text-black" >About Us</Nav.Link>
            <Nav.Link href="/Services" className="ms-5 text-black">What We Do</Nav.Link>
            <Nav.Link href="/Our_Team" className="ms-5 text-black">Our Team</Nav.Link>
            <Button href="/Contact" className="ms-5" variant="success">Contact Us</Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
