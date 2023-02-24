import React from 'react'
import {Card, Row, Col, Container, OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import work from '../img/work.png';
import brain from '../img/brain.png';
import sola from '../img/sola.png';
import book from '../img/book.png';
import pharmacy from '../img/pharmacy.png';
import payment from '../img/payment.png';
import makeup from '../img/makeup.png';

const Ourwork = () => {
  return (
    <>
    <main role="main" className= "container-fluid px-0">
    <div className="text-center">
         <Card className="bg-dark text-white">
          <Card.Img src={work} alt="work" />
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title className="text-center" style={{ color: "#00FF38" }}> <h2> 
            Our Work </h2></Card.Title>
          <Card.Text >
          <br />
          At Doyenify, we help organisations solve problems with <br/> bespoke IT solutions 
          by providing the most efficient technological <br /> solutions to improve business profitability
          </Card.Text>
         </Card.ImgOverlay>
         </Card>
    </div>
    <div className='text-center'>
    <Row className=" mt-5 mx-5" >
              <Col className="d-flex justify-content-center">
              <Card style={{ width: '18rem' , backgroundColor: "#D8FEE0" }}>
               <Card.Img variant="top" src={brain} />
                 <Card.Body>
                   <Card.Title>Shining Brain</Card.Title>
                   <p>SCHOOL WEBSITE</p>
                 </Card.Body>
             </Card >
              </Col>
              <Col className="d-flex justify-content-center">
              <Card style={{ width: '18rem', backgroundColor: "#D8FEE0" }}  className="">
               <Card.Img variant="top" src={sola} />
                 <Card.Body>
                   <Card.Title>Sola Enitilo</Card.Title>
                   <p>PHOTOGRAPHY WEBSITE</p>
                 </Card.Body>
                 </Card>
              </Col>
              <Col className="d-flex justify-content-center">
              <Card style={{ width: '18rem' , backgroundColor: "#D8FEE0"}} className="">
               <Card.Img variant="top" src={book} />
                 <Card.Body>
                   <Card.Title>Pharmacy App</Card.Title>
                   <p>WEB APP</p>
                 </Card.Body>
             </Card>
             </Col>
             </Row>
    </div>
    <div className='text-center'>
    <Row className=" mt-5 mx-5" >
              <Col className="d-flex justify-content-center">
              <Card style={{ width: '18rem', backgroundColor: "#D8FEE0" }}>
               <Card.Img variant="top" src={pharmacy} />
                 <Card.Body>
                   <Card.Title>Bookly</Card.Title>
                   <p>BOOKING APP</p>
                 </Card.Body>
             </Card >
              </Col>
              <Col className="d-flex justify-content-center">
              <Card style={{ width: '18rem', backgroundColor: "#D8FEE0" }}  className="">
               <Card.Img variant="top" src={payment} />
                 <Card.Body>
                   <Card.Title>Payment Website</Card.Title>
                 <p>WEBSITE</p>
                 </Card.Body>
                 </Card>
              </Col>
              <Col className="d-flex justify-content-center">
              <Card style={{ width: '18rem' , backgroundColor: "#D8FEE0"}} className="">
               <Card.Img variant="top" src={makeup} />
                 <Card.Body>
                   <Card.Title>Makeup Website</Card.Title>
                   <p>MAKEUP WEBSITE</p>
                 </Card.Body>
             </Card>
             </Col>
             </Row>
    </div>

    </main>
    </>
    
  )
}

export default Ourwork