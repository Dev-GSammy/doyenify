import React from 'react'
import {Card, Row, Col, Container, OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import about from "../img/about.png";
import who from "../img/who.png";
import what from "../img/what.png";





const About_us: React.FC = () => {
  return (
    <>
    <main role="main" className= "container-fluid px-0">
      <div className="text-center">
      <Card className="bg-dark text-white">
          <Card.Img src={about} alt="about" />
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title className="text-center" style={{ color: "#00FF38" }}> <h2> 
            About Us </h2></Card.Title>
          <Card.Text >
          <br />
          At Doyenify, we help organisations solve problems with <br/> bespoke IT solutions 
          by providing the most efficient technological <br /> solutions to improve business profitability
          </Card.Text>
         </Card.ImgOverlay>
         </Card>
      </div>
      <div>
        <Row className='mt-5 mx-3'>
          <Col> < img src={who} alt="who we are" /> </Col>
          <Col> 
           <h2> Who We Are </h2>
           <p>Lorem ipsum dolor sit amet consectetur. Urna amet suspendisse nisi
             nisi nunc arcu consectetur in. Suspendisse nunc sodales commodo sed eu auctor porta pulvinar quisque. 
            Tristique lacus et nisi sed vitae dolor urna. Malesuada ac et eu pellentesque gravida suscipit.
            <br />
            Lorem ipsum dolor sit amet consectetur. Urna amet suspendisse nisi nisi nunc arcu consectetur in.
             Suspendisse nunc sodales commodo sed eu auctor porta pulvinar quisque. 
            Tristique lacus et nisi sed vitae dolor urna. Malesuada ac et eu pellentesque gravida suscipit.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <Row className='mt-5 mx-3'>
          <Col> <h2>Why <br /> choose us</h2> </Col>
          <Col> 
           <p>Lorem ipsum dolor sit amet consectetur. Urna amet suspendisse nisi
             nisi nunc arcu consectetur in. Suspendisse nunc sodales commodo sed eu auctor porta pulvinar quisque. 
            Tristique lacus et nisi sed vitae dolor urna. Malesuada ac et eu pellentesque gravida suscipit.
            <br />
            Lorem ipsum dolor sit amet consectetur. Urna amet suspendisse nisi nisi nunc arcu consectetur in.
             Suspendisse nunc sodales commodo sed eu auctor porta pulvinar quisque. 
            Tristique lacus et nisi sed vitae dolor urna. Malesuada ac et eu pellentesque gravida suscipit.
            </p>
          </Col>
        </Row>
        </div>
      <div>  
        <Row className='mt-5 mx-3'>
          <Col>
          <h2 className='text-center'>What We Do</h2>
          <Row>
             <Col> <h3> Web Design </h3></Col>
             <Col> <h3>Graphic Design </h3></Col>
          </Row>
          <Row>
             <Col> <h3> Video Editing</h3></Col>
             <Col> <h3>Web Design</h3></Col>
          </Row>
          </Col>
        <Col> < img src={what} alt="what we do" /> </Col>
        </Row>
      </div>
    </main>
    </>
  )
}
export default About_us
