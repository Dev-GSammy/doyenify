import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Facebook, Instagram, Linkedin, Twitter,Youtube} from 'react-bootstrap-icons';


const Footer: React.FC = () => {
  return (
    <div>
  <main>
  <div className="" style={{backgroundColor: "#e6ffcc"}}>
  <div className="my-3 p-3 rounded shadow-sm">
    <Row className="mb-5">

    <Col sm={3} className="text-center "><h5 className="text-black">Doyenify</h5>
      <p><span></span></p>
      <a href="/" className="text-black">Home</a>
      <p><span></span></p>
      <a href="/About_us" className="text-black">Our Work</a>
      <p><span></span></p>
      <a href="/Services" className="text-black">About Us</a>
      <p><span></span></p>
      <a href="#team" className="text-black">What We Do</a>
      <p><span></span></p>
      <a href="#team" className="text-black">Our Team</a>
      </Col>

      <Col sm={3} className="text-center "><h5 className="text-black">Contact</h5>
      <p><span></span></p>
      <a href="mailto:info@doyenify.tech" className="text-black">info@doyenify.tech</a>
      <p><span></span></p>
      <a href="tel:+2348135361806" className="text-black">08034657796</a>
      <p><span></span></p>
      <a href="tel:+2348135361806" className="text-black">78697840600</a>
      </Col>

     
      <Col sm={3} className="text-center"><h5 className="text-black"> Social Media </h5>
      <p><span></span></p>
      <a href="https://www.linkedin.com/company/doyenify/" className="text-black"><Linkedin/> </a>
      <p><span></span></p>
      <a href="https://www.instagram.com/doyenify/?igshid=ZDdkNTZiNTM%3D" className="text-black"><Instagram/> </a>
      <p><span></span></p>
      <a href="#" className="text-black"><Facebook/> </a>
      <p><span></span></p>
      <a href="https://twitter.com/DOYENIFY?t=iIP1-2SvQTGkMvpng9Fddw&s=09" className="text-black"><Twitter/></a>
      <p><span></span></p>
      <a href="#" className="text-black"><Youtube/> </a>
      </Col>
    
      <Col sm={3} className="text-center "><h5 className="text-black"> Address </h5>
      <p><span></span></p>
      <div className="text-black">Juhan Sutiste tee 52 - 65</div>
      <div className="text-black">Tallinn Estonia</div>
      </Col>
    </Row>
    
    </div>
    <p className="text-center">&copy; 2023. All right reserved.</p>
     </div>
      </main>
      </div>
     
  );
};
export default Footer;
