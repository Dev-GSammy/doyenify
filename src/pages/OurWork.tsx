import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../ourwork.css';

const OurWork = () => (
  <main role="main" className="container-fluid px-0">
    <div className="text-center work-header-wrapper">
      <Card className="bg-dark text-white" style={{ borderRadius: '0' , height: "100%" }}>
        <Card.Img src="./img/work.png" style={{ height: "100%", objectFit: "cover"}} alt="work" />
        <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title className="text-center" style={{ color: "#00FF38" }}>
            {" "}
            <h1>Our Portfolio </h1>
          </Card.Title>
          <Card.Text className="work-card-text">
            <br />
            <p style={{ fontSize: "20px" }}>
              {" "}
              Doyenify Technologies offer a range of IT services including Web design, Graphic Design, and Video Editing. <br /> We also have a travel consultancy arm. 
              Generally, we offer only high-quality services and are focused on maintaining the standard.
            </p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
    <div className='text-center container ourwork-container pt-3' >
     <Row className='ourwork-row'>
        <Col className=' img-col col-12 col-md-4'>
        <a  href="#" className='ourwork-link'> <div className='img-container'> <img className="img-work" src= "./img/mason.jpg" alt="mason" /> </div>
        <div className='text-wrapa'> <h4> Youtube Thumbnail</h4> <h5>GRAPHIC DESIGN</h5> </div>
        </a>
        </Col>
        <Col className=' img-col col-12 col-md-4'>
        <a  href="#" className='ourwork-link'> <div className='img-container'> <img className="img-work" src="./img/pharmacy.png" alt="pharmacy" /> </div>
        <div className='text-wrapa'> <h4> Sola Enitilo</h4> <h5>PHOTOGRAPHY WEBSITE</h5> </div>
        </a>
        </Col>
       <Col className=' img-col col-12 col-md-4'>
       <a  href="#" className='ourwork-link'> <div className='img-container'> <img className="img-work" src="./img/arteta.jpg" alt="" /> </div>
        <div className='text-wrapa'> <h4> Youtube Video</h4> <h5>VIDEO EDITING</h5> </div>
        </a>
        </Col>
     </Row>
     <Row className='ourwork-row'>
        <Col  className='img-col col-12 col-sm-5'>
        <a  href="#" className='ourwork-link'> <div className='img-container'> <img className="img-work" src="./img/sola.png" alt="" /> </div>
        <div className='text-wrapa'> <h4> Sola Enitilo</h4> <h5>PHOTOGRAPHY WEBSITE</h5> </div>
        </a>
        </Col>
        <Col className=' img-col col-12 col-sm-7'>
        <a  href="#" className='ourwork-link'> <div className='img-container'> <img  className="img-work" src="./img/book2.png" alt="" /> </div>
        <div className='text-wrapa'> <h4> Bookly</h4> <h5>BOOKING APP</h5> </div>
        </a>
        </Col>
     </Row>
     <Row className='ourwork-row'>
        <Col  className='img-col col-12 col-sm-8'>
        <a  href="#" className='ourwork-link'> <div className='img-container'> <img className="img-work" src="./img/brain2.png" alt="" /> </div>
        <div className='text-wrapa'> <h4> Shining Brains</h4> <h5>SCHOOL WEBSITE</h5> </div>
        </a>
        </Col>
        <Col className=' img-col col-12 col-sm-4'>
        <a  href="#" className='ourwork-link'> <div className='img-container'> <img className="img-work" src="./img/brain.png" alt="" /> </div>
        <div className='text-wrapa'> <h4> Sola Enitilo</h4> <h5>PHOTOGRAPHY WEBSITE</h5> </div>
        </a>
        </Col>
     </Row>
     <Row className='ourwork-row'>
        <Col  className='img-col col-12 col-sm-5'>
        <a  href="#" className='ourwork-link'> <div className='img-container'> <img className="img-work" src="./img/pharmacy.png" alt="" /> </div>
        <div className='text-wrapa'> <h4> Pharmacy</h4> <h5>PHARMACY WEBSITE</h5> </div>
        </a>
        </Col>
        <Col className=' img-col col-12 col-sm-7'>
        <a  href="#" className='ourwork-link'> <div className='img-container'> <img className="img-work" src="./img/makeup2.png" alt="" /> </div>
        <div className='text-wrapa'> <h4> Makeup</h4> <h5>MAKEUP WEBSITE</h5> </div>
        </a>
        </Col>
     </Row>
    </div>
  </main>
);

export default OurWork;
