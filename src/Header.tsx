import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

interface Props {
  label: string;
  path: string;
}

const Header = ({ navigation }: { navigation: Props[] }) => {
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#e6ffcc" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            alt=""
            src="./img/doyen1.png"
            width="170"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {navigation.map(({ label, path }) => (
              <Nav.Link
                onClick={() => navigate(path)}
                className="ms-5 text-black"
              >
                {label}
              </Nav.Link>
            ))}
            <Button
              onClick={() => navigate("/contact")}
              className="ms-5"
              variant="success"
            >
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
