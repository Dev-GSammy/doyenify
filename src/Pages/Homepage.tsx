import React from "react";
import {Card, Row, Col, Container, OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import home from '../img/home.png';
import web from '../img/web.png';
import graphic from '../img/graphic.png';
import video from '../img/video.png';
import imageone from '../img/imageone.png';
import imagetwo from '../img/imagetwo.png';
import imagethree from '../img/imagethree.png';


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
      <main role="main" className="container-fluid px-0">
        <div className="text-center">
         
         <Card className="bg-dark text-white" style={{ borderRadius: 0}}>
          <Card.Img src={home} alt="Home" />
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title className="text-center" style={{ color: "#00FF38" }}> <h2> Welcome to Doyenify Technologies </h2></Card.Title>
          <Card.Text >
          <br />
          At Doyenify, we help organisations solve problems with <br/> bespoke IT solutions 
          by providing the most efficient technological <br /> solutions to improve business profitability
          </Card.Text>
          <Button className="mt-5 px-5 py-1" href= "/Ourwork"
           style={{ 
           backgroundColor: "#757F77", 
           color: "#ffffff", 
           borderRadius: " 50px",
           border:" 2px solid #ffffff",
           fontWeight: "600" }}> View Our Work </Button>
         </Card.ImgOverlay>
         </Card>
        
        </div>
          <div style={{backgroundColor: "#D9D7F8"}}>
            <Row >
              <Col>
              < img src={web} alt="Web" />
              </Col>
              <Col className="mt-5 mx-5 d-flex flex-column align-items-leftgit justify-content-center"> 
                <h4>RESPONSIVE AND CREATIVE</h4>
                <h2 style={{color: "#387846"}}>Web Design</h2>
                <p>Web design is the creation of websites and pages to reflect 
                  a company's brand and information and ensure a user-friendly experience. 
                  Appearance and design are incorporated as vital 
                  elements whether you're designing a website, mobile app or
                   maintaining content on a web page </p>
              </Col>
            </Row>
          </div>
          <div style={{backgroundColor: "#757F77"}}>
            <Row >
              <Col className="mt-5 mx-5 d-flex flex-column align-items justify-content-center">
                <h4>CREATIVE AND SMART</h4>
                <h2 style={{color: "#387846"}}>Graphic Design</h2>
                <p>Graphic design is a craft where professionals create visual content
                   to communicate messages. By applying visual hierarchy and page layout techniques,
                    designers use typography and pictures to meet users' specific needs and focus
                   on the logic of displaying elements in interactive designs, to optimize the user experience</p>
              </Col>
              <Col>
                  < img src={graphic} alt="graphic design" />
              </Col>
            </Row>
          </div>
          <div style={{backgroundColor: "#D9D7F8"}}>
            <Row>
              <Col className="mx-5">
              < img src={video} alt="Video Editing" />
              </Col>
              <Col className="mt-5 mx-5 d-flex flex-column align-items justify-content-center">
                <h4>GOOD AND NICE</h4>
                <h2 style={{color: "#387846"}}>Video Editing</h2>
                <p>Video editing is the manipulation and arrangement of video shots.
                   Video editing is used to structure and present all video information,
                   including films and television shows, video advertisements and video essays</p>
              </Col>
            </Row>
          </div>
          
          <div>
            <h2 className="text-center mt-5"> Explore Our Products</h2>
            <Row className=" mt-5 mx-5" >
              <Col className="d-flex justify-content-center">
              <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={imageone} />
                 <Card.Body>
                   <Card.Title>Booking App</Card.Title>
                 </Card.Body>
             </Card >
              </Col>
              <Col className="d-flex justify-content-center">
              <Card style={{ width: '18rem' }}  className="">
               <Card.Img variant="top" src={imagetwo} />
                 <Card.Body>
                   <Card.Title>Pay Roll App</Card.Title>
                 </Card.Body>
                 </Card>
              </Col>
              <Col className="d-flex justify-content-center">
              <Card style={{ width: '18rem' }} className="">
               <Card.Img variant="top" src={imagethree} />
                 <Card.Body>
                   <Card.Title>Pharmacy App</Card.Title>
                 </Card.Body>
             </Card>
             </Col>
             </Row>
          </div>
     </main>
    </div>
  </>
  );
};
export default Landing;
