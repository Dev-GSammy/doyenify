import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import "../ourTeam.css";

const OurTeam = () => (
  <main role="main">
    <div className=" team-header-wrapper text-center">
      <Card className="bg-dark text-white h-100" style={{ borderRadius: "0", height: "100%"}}>
        <Card.Img src="./img/teamImg.jpg" style={{ height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center imgoverlay">
          <Card.Title className="text-center" style={{ color: "#00FF38" }}>
            {" "}
            <h2> Our Team </h2>
          </Card.Title>
          <Card.Text className="team-card-text mt-4" style={{ fontSize: "1.25em" }}>
            Meet our team of developers, creators, designers, and world-class{" "}
            <br /> problem solvers. To be the company our customers want us to be,
            it takes an eclectic of passionate operators.
            <br /> Get to know the people leading the way at Doyenify
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
    <div
      className="container-fluid mt-5"
      style={{ marginTop: "6.3rem", padding: "50px 100px 100px 100px" }}
    >
      <Row className="gx-5 mb-3">
        <Col>
          <Card className="border-0 team-profile-card">
            <Card.Img className="team-profile-img" src="./img/oluyide_ourteam_img.jpg" />
            <div className="overlay-desc-top">
              <h3>Gbenga Oluyide</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <Card.Body className="px-0">
              <Card.Title className="mb-2">Gbenga Oluyide</Card.Title>
              <Card.Text className="font-italic" >Founder & CEO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 team-profile-card">
            <Card.Img className="team-profile-img" src="./img/solagbade_ourteam_img.jpg" />
            <div className="overlay-desc-top">
              <h3>Enitilo Solagbade</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <Card.Body className="px-0">
              <Card.Title className="mb-2">Enitilo Solagbade</Card.Title>
              <Card.Text>Tech Lead</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="border-0 team-profile-card">
            <Card.Img className="team-profile-img" src="./img/timmy_ourteam_img.jpg" />
            <div className="overlay-desc-top">
              <h3>Timilehin Ogunwole</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <Card.Body className="px-0">
              <Card.Title className="mb-2">Timilehin Ogunwole</Card.Title>
              <Card.Text>Business Analyst/Product Owner</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="gx-5 mb-3">
        <Col className="col-sm-4">
          <Card className="border-0 team-profile-card">
            <Card.Img className="team-profile-img"src="./img/ifedolapo_ourteam_img.jpg" />
            <div className="overlay-desc-top">
              <h3>Ifedolapo Ayoola</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <Card.Body className="px-0">
              <Card.Title className="mb-2">Ifedolapo Ayoola</Card.Title>
              <Card.Text className="font-italic">Software Developer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-4">
          <Card className="border-0 team-profile-card">
            <Card.Img className="team-profile-img" src="./img/Rectangle80.png" />
            <div className="overlay-desc-top">
              <h3>Ifeoluwa Olagbemi</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <Card.Body className="px-0">
              <Card.Title className="mb-2">Ifeoluwa Olagbemi</Card.Title>
              <Card.Text>Product Designer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </main>
);

export default OurTeam;
