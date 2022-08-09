import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {FileEarmarkMedicalFill, CalendarFill, Cart4} from 'react-bootstrap-icons';
import Rectangle20 from '../img/Rectangle20.png';

const divStyle = {
  backgroundColor: "#F4FDF4",
  width: "120px",
	height: "120px",
  borderRadius: "50px",
  marginLeft:"115px"
};

const Services: React.FC = () => {
  return (
    <>
    <div>
      <main role="main" className="container">

        <div>
          <h2 className="text-center text-success mb-5 mt-3" >Services</h2>
          <Row>
            <Col sm={6} >
           <h1 className=" text-justify mt-4 ms-5" > Our <br></br> Services.</h1>
           
          
            </Col>
            <Col>
              <h2 className=" text-left text success ">An  Overview of </h2>
              <h2 className=" text-left text success "> what we do</h2>
              <p><span></span></p>
              <div> We are an IT outfit with experienced technical and business
                 professionals dedicated to developing technologically driven
                solutions to help organisations scale their businesses.
              </div>
            </Col>
          </Row>

          <div className="my-3 p-3 rounded shadow-sm">
            <h2 className="text-center  mb-5">Our Digital Products</h2>
            <Row className="mb-5">
            <Col lg={4} className="text-center" ><div style={divStyle} ><FileEarmarkMedicalFill size={96}/>
            <p style={{marginTop: "25%"}}><strong>Pharmarcy Solutions</strong></p></div>
            </Col>
            <Col sm={4} className="text-center "><div style={divStyle} ><CalendarFill  size={96} /><p style={{marginTop: "25%"}}><strong>Pay Roll</strong></p></div>
            </Col>
            <Col sm={4} className="text-center"><div style={divStyle} ><Cart4 size={96} /><p style={{marginTop: "25%"}}><strong>E-commerce</strong></p></div>
            </Col>
            </Row>
          </div>

        
       
        </div>

      </main>

    </div>
    </>
  );
};

export default Services;