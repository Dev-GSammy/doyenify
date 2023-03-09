import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../homepage.css';

const divStyle = {
  backgroundColor: "#F4FDF4",
  width: "120px",
  height: "120px",
  borderRadius: "50px",
  marginLeft: "115px",
};

const Home = () => (
  <div>
    <main role="main" className="container-fluid px-0">
      <div className="text-center">
        <Card className="bg-dark text-white" style={{ borderRadius: 0 }}>
          <Card.Img src="./img/home.png" alt="Home" />
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
            <Card.Title className="text-center" style={{ color: "#00FF38" }}>
              {" "}
              <h2> Welcome to Doyenify Technologies </h2>
            </Card.Title>
            <Card.Text >
          <br />
          <p style={{ fontSize: "20px" }}> You  are ready to join our global clients of 10,000+ network
            we help Individuals and organizations solve problems with
            bespoke IT solutions by providing the most efficient technological
            solutions to improve business profitability.
          </p>
          </Card.Text>
            <Button
              className="mt-5 px-5 py-1 home-button"
              href="/our_work"
              style={{
              backgroundColor: "#757F77",
              color: "#ffffff",
              borderRadius: " 50px",
              border: " 2px solid #ffffff",
              fontWeight: "600",
              }}
            >
              {" "}
              View Our Work{" "}
            </Button>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div style={{backgroundColor: "#D9D7F8"}}>
            <Row >
              <Col className="do-content">
              < img src= "./img/web.png" alt="Web" />
              </Col>
              <Col className="mt-5 mx-5 d-flex flex-column align-items-leftgit justify-content-center do-content"> 
              <h4 style={{fontSize: "36px"}}>RESPONSIVE AND CREATIVE</h4>
              <h2 style={{color: "#387846", fontSize: "36px"}}>Web Design</h2>
                <p style={{fontSize: "20px"}}>We analyze your business to design and create a befitting website 
                  which increases online conversation rate and produces positive results. </p>
              </Col>
            </Row>
          </div>
          <div style={{backgroundColor: "#DFE2E3"}}>
            <Row >
              <Col className="mt-5 mx-5 d-flex flex-column align-items justify-content-center do-content">
                <h4 style={{fontSize: "36px"}}> CREATIVE AND SMART</h4>
                <h2 style={{color: "#387846", fontSize: "36px"}}>Graphic Design</h2>
                <p style={{fontSize: "20px"}}> Our Graphics design aims for one thing: positive results. We use a unique approach to 
                  communicate visual art ideas which helps to boost identity and gives classic brand recognition.</p>
              </Col>
              <Col className="do-content">
                  < img src="./img/graphic.png" alt="graphic design" />
              </Col>
            </Row>
          </div>
          <div style={{backgroundColor: "#D9D7F8"}}>
            <Row>
              <Col className="mx-5 do-content">
              < img src="./img/video.png" alt="Video Editing" />
              </Col>
              <Col className="mt-5 mx-5 d-flex flex-column align-items justify-content-center do-content">
                <h4 style={{fontSize: "36px"}}>GOOD AND NICE</h4>
                <h2 style={{color: "#387846", fontSize: "36px"}}>Video Editing</h2>
                <p style={{fontSize: "20px"}}>Our 5-star Video editing services are highly rated because we blend images, 
                  sound and videos effectively using top notch tools. 
                  This gives our clients optimum satisfaction and a competitive edge.</p>
              </Col>
            </Row>
          </div>
          <div>
            <h2 className="text-center mt-5"> Explore Our Products</h2>
             <div className='text-center container ourhome-container pt-3' >
               <Row className='ourhome-row'>
                <Col className=' img-col col-12 col-md-4'>
                <a  href="" className='ourhome-link'> <div className='img-container'> <img src="./img/imageone.png" alt="" /> </div>
                <div className='text-wrapa'> <h4> Booking App</h4> </div>
                  </a>
                  </Col>
                  <Col className=' img-col col-12 col-md-4'>
                  <a  href="" className='ourhome-link'> <div className='img-container'> <img src="./img/imagetwo.png" alt="" /> </div>
                  <div className='text-wrapa'> <h4> Pay Roll App</h4>  </div>
                  </a>
                  </Col>
                <Col className=' img-col col-12 col-md-4'>
                <a  href="" className='ourhome-link'> <div className='img-container'> <img src="./img/imagethree.png" alt="" /> </div>
                  <div className='text-wrapa'> <h4> Pharmacy App</h4>  </div>
                  </a>
                  </Col>
              </Row>
             </div>
             </div>
    </main>
  </div>
);

export default Home;
