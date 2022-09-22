import React from "react";
import Logo from './img/doyen1.png';
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
          <img src={Logo} alt="doyen1"  width="100" height="auto"  className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-5 p-3" >
              <Nav.Link href="/" className="ms-5" style={{color:"#121212"}}> <h5>Home</h5> </Nav.Link>
              <Nav.Link href="/About_us" className="ms-4" style={{color:"#121212"}}> <h5>About us</h5></Nav.Link> 
              <Nav.Link href="/Services" className="ms-4" style={{color:"#121212"}}> <h5>Services</h5></Nav.Link>
              <Nav.Link href="/Contact" className="ms-4" style={{color:"#121212"}}> <h5>Contact</h5></Nav.Link> 
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
