import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./header.css";

interface Props {
  label: string;
  path: string;
}

const Header = ({ navigation }: { navigation: Props[] }) => {
  const navigate = useNavigate();

  //Nav link active styling
  const btnEl = document.querySelectorAll('.nav-links');

  btnEl.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
      document.querySelector('.activate')?.classList.remove('activate');
      btnEl.classList.add('activate');
    })
  })

  
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#e6ffcc", width: "100vw" }}
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            alt="doyenify logo"
            src="./img/doyen1.png"
            width="170"
            height="auto"
            className="d-inline-block align-top"
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{filter: "invert(40%) sepia(37%) saturate(561%) hue-rotate(81deg) brightness(91%) contrast(94%)"}}>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {navigation.map(({ label, path }) => (
              <Nav.Link
                onClick={() => navigate(path)}
                className="ms-5 text-black nav-links"
              >
                {label}
              </Nav.Link>
            ))}
            <Button
              onClick={() => navigate("/contact")}
              className="ms-5 nav-links"
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
