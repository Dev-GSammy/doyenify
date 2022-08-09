import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {Display, PersonHeart ,Award, FileEarmarkMedicalFill,CalendarFill, Cart4} from 'react-bootstrap-icons';
import office from '../img/office.jpg';

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
    <Row >
      <Col sm={6}>
          <h2 className="text-success">Welcome to Doyenify</h2>
          <p><span></span></p>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </Col>
      <Col sm={6}><img src={office} alt="office"  width="500" height="300" className="rounded"/></Col>
    </Row>
    </div>
    <div className="my-3 p-3 rounded shadow-sm">
    <h2 className="text-center  mb-5">Why Doyenify?</h2>
    <Row className="mb-5">
      <Col lg={4} className="text-center" ><div style={divStyle} ><Display size={96}/>
      <p style={{marginTop: "25%"}}><h4>Reliable</h4></p></div></Col>
      <Col sm={4} className="text-center "><div style={divStyle} ><Award  size={96} /><p style={{marginTop: "25%"}}><h4>Professionalism</h4></p></div></Col>
      <Col sm={4} className="text-center"><div style={divStyle} ><PersonHeart size={96} /><p style={{marginTop: "25%"}}><h4>Integrity</h4></p></div></Col>
    </Row>
    </div>
    <div className="my-3 p-3 rounded shadow-sm">
    <Row >
    <Col sm={6}><img src={office} alt="office"  width="500" height="300" className="rounded"/></Col>
      <Col sm={6}>
          <h2 className="text-success">Be a data Guru</h2>
          <p><span></span></p>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </Col>
    </Row>
    </div>
    <div className="my-3 p-3 rounded shadow-sm">
    <h2 className="text-center  mb-5">Our Products</h2>
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
