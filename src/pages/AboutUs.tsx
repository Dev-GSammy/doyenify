import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../aboutus.css';


const AboutUs = () => (
  <>
    <main role="main" className="container-fluid px-0">
      <div className="text-center about-header-wrapper">
        <Card className="bg-dark text-white" style={{ borderRadius:  "0" , height: "100%"  }}>
          <Card.Img src="./img/about.png" style={{ height: "100%", objectFit: "cover"}} alt="about" />
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
            <Card.Title className="text-center" style={{ color: "#00FF38" }}>
              {" "}
              <h1>About Us </h1>
            </Card.Title>
            <Card.Text  className='about-card-text'>
          <br />
          <p style={{ fontSize: "20px" }}>Doyenify Technologies is an Information Technology (IT) and Consulting Company <br />
           that provides top-notch services to businesses and individuals. 
          </p>
          </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div>
        <Row className="mt-5 mb-5 mx-3">
          <Col className="col-12 col-sm-6" >
            {" "}
            <img
              src="./img/who.png"
              width="100%"
              height=""
              alt="who we are"
            />{" "}
          </Col>
          <Col className=" col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className="mt-5"> Who We Are </h2>
            <p>We are a team of IT experts focused on website design, graphic design, video editing, 
               website development which help brands by boosting recognition and compelling patronage.
               We proffer expert solutions and develop new methods to improve business growth technically.
             <br />
              We also offer consultancy services by providing strategic advice in relation to travel and relocation. 
              Our specialist advice helps to aid Skills
              acquisition for individuals which will make life easier in their various destinations.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <Row className="mt-5 mx-3">
          <Col className=" why-choose-us-circle col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center">
            <div
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                backgroundColor: "#B0FFC1",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
              }}
            >
              <h1>
                Why <br /> Choose Us
              </h1>
            </div>
          </Col>
          <Col className=" col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center">
            <div>
            <p>Our IT services work together to build brand recognition.
             A well-recognized business differentiates from the others and can give a competitive edge. 
             Our goal is to take your business to a level where customers instantly recognize your brand. 
             <br />
             If you’re looking to relocate to a new Country for work, our professional consultancy services can help 
             you to make informed decisions. Relocation can be very stressful, but with our help the process 
             can be made much easier.

            </p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row className="mt-5 mx-3">
          <Col
            style={{ textAlign: "center" }}
            className=" col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center"
          >
            <h2>What We Do</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100% ",
                margin: "0 auto",
              }}
            >
              <div className="text-start">
                <h3>Web Design</h3> <h3>Video Editing</h3>
              </div>
              <div className="text-start">
                <h3>Graphic Design</h3> <h3>Web Design</h3>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-sm-6">
            {" "}
            <img src="./img/what.png" width="100%" height="auto" alt="what we do" />{" "}
          </Col>
        </Row>
      </div>
    </main>
  </>
);

export default AboutUs;
