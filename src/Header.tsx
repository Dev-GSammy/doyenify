import React from "react";
import logo from './img/doyen.png';
// import { Redirect } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav
  // Form,
  // FormControl,
  // Button
} from "react-bootstrap";

// const linkStyle = {
//   textDecoration: "underline"
// };

const navBarStyles = {
  backgroundColor: "#fff",
  backgroundImage: "linear-gradient(0deg, #D2D2D2 0%, #97D9E1 100%);",
  boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.3)"
};
const Header: React.FC = () => {
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        style={navBarStyles}
      >
        <Container>
          <Navbar.Brand>
          <img src={logo} alt="Logo"  width="120" height="100"  className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About Us</Nav.Link>
              <Nav.Link href="/Services">Services</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="nav-scroller bg-white shadow-sm">
        <Container>
          <nav className="nav nav-underline">
          </nav>
        </Container>
      </div>
    </div>
  );
};
export default Header;
