import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Facebook, Instagram, Linkedin, Twitter,Youtube, Whatsapp, Telegram} from 'react-bootstrap-icons';
import "./footer.css";


const Footer: React.FC = () => {
  return (
    <div>
  <main>
  <div className="" style={{backgroundColor: "#e6ffcc", paddingTop: "20px"}}>
  <div className="my-3 px-3 rounded shadow-sm">
    <Row className="mb-5 ">

    <Col sm={3} className="text-start footer" style={{ padding: "0 100px" }}>
        <h5 className="text-black mb-5 mt-5">Doyenify</h5>
        <p><span></span></p>
        <a href="/" className="text-black" style={{ display: "block" }}>Home</a>
        <p><span></span></p>
        <a href="/About_us" className="text-black">Our Work</a>
        <p><span></span></p>
        <a href="/Services" className="text-black">About Us</a>
        <p><span></span></p>
        <a href="#team" className="text-black">What We Do</a>
        <p><span></span></p>
        <a href="#team" className="text-black">Our Team</a>
    </Col>

      <Col sm={3} className="text-start footer" style={{ padding: "0 100px" }}><h5 className="text-black mb-5 mt-5">Contact</h5>
      <p><span></span></p>
      <a href="mailto:info@doyenify.tech" className="text-black">info@doyenify.tech</a>
      <p><span></span></p>
      <a href="tel:+2348135361806" className="text-black">08034657796</a>
      <p><span></span></p>
      <a href="tel:+2348135361806" className="text-black">78697840600</a>
      </Col>

     
      <Col sm={3} className="text-start" style={{ padding: "0 100px" }}><h5 className="text-black mb-5 mt-5"> Social Media </h5>
      
      <a href="#" className="text-black " target="_blank"><Whatsapp className="footer-link" /> </a>
      <div className="spacer20"></div>
      <a href="#" className="text-black " target="_blank"><Telegram className="footer-link" /> </a>
      <p><span></span></p>
      <a href="https://www.linkedin.com/company/doyenify/" className="text-black " target="_blank"><Linkedin className="footer-link" /> </a>
      <div className="spacer20"></div>
      <a href="https://www.instagram.com/doyenify/?igshid=ZDdkNTZiNTM%3D" className="text-black" target="_blank"><Instagram className="footer-link" /> </a>
      <p><span></span></p>
      <a href="#" className="text-black" target="_blank"><Facebook className="footer-link" /> </a>
      <div className="spacer20"></div>
      <a href="https://twitter.com/DOYENIFY?t=iIP1-2SvQTGkMvpng9Fddw&s=09" className="text-black" target="_blank"><Twitter className="footer-link" /></a>
      <p><span></span></p>
      <a href="#" className="text-black" target="_blank"><Youtube className="footer-link" /> </a>
      </Col>
    
      <Col sm={3} className="text-start" style={{ padding: "0 100px" }}><h5 className="text-black mb-5 mt-5"> Address </h5>
      <p><span></span></p>
      <div className="text-black">Juhan Sutiste tee 52 - 65</div>
      <div className="text-black">Tallinn Estonia</div>
      <iframe 
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.198023576183!2d24.68082701551595!3d59.39640861268515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295022d9dd25b%3A0x18652f97454bddc6!2sJ.%20S%C3%BCtiste%20tee%2052%2C%2013420%20Tallinn%2C%20Estonia!5e0!3m2!1sen!2sng!4v1677685916382!5m2!1sen!2sng" 
       width="200" 
       height="100" 
       style={{  border: "0" }} 
       loading="lazy" 
       >
       </iframe>
      </Col>
    </Row>
    
    </div>
    <p className="text-center pb-3">&copy; 2023. All right reserved.</p>
     </div>
      </main>
      </div>
     
  );
};
export default Footer;
