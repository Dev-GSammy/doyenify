import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Facebook, Instagram, Linkedin, Twitter,Youtube, Whatsapp, Telegram, Envelope, Telephone} from 'react-bootstrap-icons';
import "./footer.css";
import { Link } from 'react-router-dom';
import  Termandconditions  from "./Termandconditions";
import  PrivatePolicy  from "./PrivatePolicy";


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
        <Link to="/" className="link_tag"><a className="text-black" style={{ display: "block" }}>Home</a></Link>
        <p><span></span></p>
        <Link to="/our_work" className="link_tag"><a className="text-black">Our Work</a></Link> 
        <p><span></span></p>
        <Link to="/about_us" className="link_tag"><a className="text-black">About Us</a></Link>
        <p><span></span></p>
        <Link to="/services" className="link_tag"><a className="text-black">What We Do</a></Link>
        <p><span></span></p>
        <Link to="our_team" className="link_tag"><a className="text-black">Our Team</a></Link>
    </Col>

      <Col sm={3} className="text-start footer" style={{ padding: "0 70px" }}><h5 className="text-black mb-5 mt-5">Contact</h5>
      <p><span></span></p>
      <a href="mailto:info@doyenify.tech" className="text-black"><Envelope /><div className="spacer10"></div>info@doyenify.tech</a>
      <p><span></span></p>
      <a href="tel:+2348135361806" className="text-black"><Telephone /><div className="spacer10"></div>+37256704920</a>
      <p><span></span></p>
      <a href="tel:+2348135361806" className="text-black"><Telephone /><div className="spacer10"></div>+2348071005481</a>
      </Col>

     
      <Col sm={3} className="text-start" style={{ padding: "0 100px" }}><h5 className="text-black mb-5 mt-5"> Social Media </h5>
      
      <a href="#" className="text-black" ><Whatsapp className="footer-link" /> </a>
      <div className="spacer20"></div>
      <a href="https://t.me/doyenify" className="text-black" target="_blank" ><Telegram className="footer-link" /> </a>
      <p><span></span></p>
      <a href="https://www.linkedin.com/company/doyenify/" className="text-black " target="_blank"><Linkedin className="footer-link" /> </a>
      <div className="spacer20"></div>
      <a href="https://www.instagram.com/doyenify/?igshid=ZDdkNTZiNTM%3D" className="text-black" target="_blank"><Instagram className="footer-link" /> </a>
      <p><span></span></p>
      <a href="https://web.facebook.com/profile.php?id=100091606221617" className="text-black " target="_blank"><Facebook className="footer-link" /> </a>
      <div className="spacer20"></div>
      <a href="https://twitter.com/DOYENIFY?t=iIP1-2SvQTGkMvpng9Fddw&s=09" className="text-black" target="_blank"><Twitter className="footer-link" /></a>
      <p><span></span></p>
      <a href="https://www.youtube.com/@DOYENIFY" className="text-black " target="_blank"><Youtube className="footer-link" /> </a>
      <div className="spacer20"></div>
      <a className="social-media contact_linktree_footer_icon footer-link text-black" href="https://linktr.ee/doyenify" target="_blank"><img src="../img/linktree_logo.png"></img></a>
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
      <div className="d-flex footer-terms">
        <p className="text-center pb-3 px-3">&copy; 2023. All right reserved.</p>
        <p className="text-center pb-3 fs-5">I</p>
        <Termandconditions />
        <p className="text-center pb-3 fs-5">I</p>
        <PrivatePolicy />
      </div>
    </div>
      </main>
      </div>
     
  );
};
export default Footer;
