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
      <Col lg={3} className="text-center text-white" >
        <h5>Doyenify</h5>
      <div>
      61 community road,
      <div>Akoka,yaba,Lagos.</div>
        
        </div>
        </Col>

      <Col sm={3} className="text-center text-white  ">
      <h5>Main Navigation</h5>
      <div>About</div>
      <br></br>
      <div>Services</div>
      <br></br>
      <div>Products</div>
      </Col>
      <Col sm={3} className="text-center text-white"> <h5>Social media</h5>
      <div><Facebook/></div>
      <br></br>
      <div><Twitter/></div>
      <br></br>
      <div><Youtube/></div></Col>
      <Col sm={3} className="text-center text-white" > <h5>Contact</h5>
      <div>0808*******</div>
      <div>080********</div>
      </Col>
    </Row>
    </div>
     </div>
      </main>
      </div>
     
  );
};

export default Footer;
