import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Facebook, Twitter,Youtube} from 'react-bootstrap-icons';

// import { Redirect } from "react-router-dom";
// import {
//   Container,
//   Navbar,
//   Nav
//   // Form,
//   // FormControl,
//   // Button
// } from "react-bootstrap";


const Footer: React.FC = () => {
  return (
    <div>
  <main role="main" className="container">
  <div className="" style={{backgroundColor: "#42ba96"}}>
  <div className="my-3 p-3 rounded shadow-sm">
    <Row className="mb-5">
      <Col lg={3} className="text-center" ></Col>
      <Col sm={3} className="text-center "></Col>
      <Col sm={3} className="text-center"></Col>
      <Col sm={3} className="text-center"><Facebook/><Twitter/><Youtube/></Col>
    </Row>
    </div>
     </div>
      </main>
      </div>
     
  );
};

export default Footer;
