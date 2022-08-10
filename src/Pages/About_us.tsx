import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rectangle62 from "../img/Rectangle62.png";
import Rectangle63 from "../img/Rectangle63.png";
import Rectangle64 from "../img/Rectangle64.png";
import "bootstrap/dist/css/bootstrap.min.css";
const About_us: React.FC = () => {
  return (
    <div>
        <h2 className="text-center text-success  mb-5 mt-3" >About us</h2>
        <div> 
        <Row >
      <Col sm={6}>
          <h2 className="text-center">Our Mission</h2>
          <p><span></span></p>
          <div>Our mission is to help businesses solve problems by building affordable IT solutions to make their processes seamless and achieve their organisational objectives.</div>
      </Col>
      <Col></Col>
    </Row>
    </div>
<br></br>
<br></br>
<br></br>
    <div className="my-3 p-3 rounded shadow-sm">
        <Row >
    <Col sm={6}><img src={Rectangle63} alt="Rectangle63"  width="500" height="300" className="rounded"/></Col>
      <Col sm={6}>
          <h2 className="text-center">Our Approach</h2>
          <p><span></span></p>
          <div>We maintain a high recruitment standard and have a team of solution-oriented professionals ready to transform your business with the right product to suit your needs.</div>
      </Col>
    </Row>
    </div>
<br></br>
<br></br>
<br></br>
    <div>  
        <Row >
      <Col sm={6}>
          <h2 className="text-center  mb-5">Our Process</h2>
          <p><span></span></p>
          <div>We operate an agile software development process that involves our world-class team of software developers tailoring our products to suit your specific business realities rather than offering a one size fits all solution.</div>
      </Col>
      <Col sm={6}><img src={Rectangle64} alt="Rectangle64"  width="500" height="300" className="rounded"/></Col>
    </Row>
    </div>
    </div>    
  )
}
export default About_us
