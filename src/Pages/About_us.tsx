import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mission from "../img/mission.jpg";
import Approach from "../img/Approach.jpeg";
import aim from "../img/aim.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const About_us: React.FC = () => {
  return (
    <div>
        <div className="my-3 p-3 rounded" style={{backgroundColor: "#F4FDF4"}}> 
        <Row >
      <Col sm={6}>
          <h3 className="text-center text-success">Our Mission</h3>
          <p><span></span></p>
          <div>Our mission is to help businesses solve problems by
           building affordable IT solutions to make their processes seamless and achieve 
           their organisational objectives.</div>
      </Col>
      <Col sm={6}><img src={mission} alt="mission"  width="500" height="300" className="rounded"/></Col>
    </Row>
    </div>
    <div className="my-3 p-3 rounded">
        <Row >
    <Col sm={6}><img src={Approach} alt="Approach"  width="500" height="300" className="rounded"/></Col>
      <Col sm={6}>
          <h3 className="text-center text-success">Our Approach</h3>
          <p><span></span></p>
          <div>We maintain a high recruitment standard and have 
            a team of solution-oriented professionals ready to transform
             your business with the right product to suit your needs.</div>
      </Col>
    </Row>
    </div>
    <div className="my-3 p-3 rounded" style={{backgroundColor: "#F4FDF4"}}>  
        <Row >
      <Col sm={6}>
          <h3 className="text-center text-success">Our Process</h3>
          <p><span></span></p>
          <div> We operate an agile software development process that involves
             our world-class team of software developers tailoring our products to 
             suit your specific business realities rather than offering a one size 
             fits all solution.</div>
      </Col>
      <Col sm={6}><img src={aim} alt="aim"  width="500" height="300" className="rounded"/></Col>
    </Row>
    </div>
    </div>    
  )
}
export default About_us
