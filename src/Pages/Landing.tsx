import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {Display, PersonHeart ,Award, FileEarmarkMedicalFill,CalendarFill, Cart4} from 'react-bootstrap-icons';
import office from '../img/office.jpg';
import wel from '../img/wel.jpg';

const divStyle = {
  backgroundColor: "#F4FDF4",
  width: "120px",
	height: "120px",
  borderRadius: "50px",
  marginLeft:"115px"
};

const Landing: React.FC = () => {
  return (
    <> 
<div>
  <main role="main" className="container">
  <div className="my-3 p-3 rounded shadow-sm" style={{backgroundColor: "#F4FDF4"}}>
    <Row>
      <Col sm={6}>
          <h2 className="text-success">Welcome to Doyenify</h2>
          <h2 className="text-success">Technologies</h2>
          <p><span></span></p>
          <div>At Doyenify, we help organisations solve problems with bespoke IT solutions 
            by providing the most efficient technological solutions to improve business profitability</div>
      </Col>
      <Col sm={6}><img src={wel} alt="wel"  width="500" height="300" className="rounded"/></Col>
    </Row>
    </div>
    <div className="my-3 p-3 rounded shadow-sm">
    <h3 className="text-center text-success mb-5">Why Doyenify?</h3>
    <Row className="mb-5">
      <Col lg={4} className="text-center" >
        <div style={divStyle} ><Display size={96}/>
      <p style={{marginTop: "25%"}}><h5>Reliable</h5></p></div></Col>
      <Col sm={4} className="text-center "><div style={divStyle} ><Award  size={96} /><p style={{marginTop: "25%"}}><h5>Professionalism</h5></p></div></Col>
      <Col sm={4} className="text-center"><div style={divStyle} ><PersonHeart size={96} /><p style={{marginTop: "25%"}}><h5>Integrity</h5></p></div></Col>
    </Row>
    </div>
    <div className="my-3 p-3 rounded shadow-sm">
    <Row >
    <Col sm={6}><img src={office} alt="office"  width="500" height="300" className="rounded"/></Col>
      <Col sm={6}>
          <h3 className="text-success">Be a Tech Guru</h3>
          <p><span></span></p>
          <div>We offer distinctive training and reputable professional development
             programs designed to cover and meet the needs of all sectors of our society 
             ranging from individuals, corporate establishments and government agencies 
             making them international standard. Our training module is holistic,
             which include foundational theories as well 
            as hands-on application activities that will go a long way to
             develop minds and making them IT professionals.</div>
      </Col>
    </Row>
    </div>
    <div className="my-3 p-3 rounded shadow-sm">
    <h3 className="text-center text-success mb-5">Our Products</h3>
    <Row className="mb-5">
      <Col lg={4} className="text-center" ><div style={divStyle} ><FileEarmarkMedicalFill size={96}/>
      <p style={{marginTop: "25%"}}><strong>Pharmarcy Solutions</strong></p></div></Col>
      <Col sm={4} className="text-center "><div style={divStyle} ><CalendarFill  size={96} /><p style={{marginTop: "25%"}}><strong>Pay Roll</strong></p></div></Col>
      <Col sm={4} className="text-center"><div style={divStyle} ><Cart4 size={96} /><p style={{marginTop: "25%"}}><strong>E-commerce</strong></p></div></Col>
    </Row>
    </div>
    </main>
  </div>
  </>
  );
};
export default Landing;
