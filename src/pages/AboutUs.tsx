import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => (
  <>
    <main role="main" className="container-fluid px-0">
      <div className="text-center">
        <Card className="bg-dark text-white" style={{ borderRadius: 0 }}>
          <Card.Img src="./img/about.png" alt="about" />
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
            <Card.Title className="text-center" style={{ color: "#00FF38" }}>
              {" "}
              <h2>About Us </h2>
            </Card.Title>
            <Card.Text>
              <br />
              At Doyenify, we help organisations solve problems with <br />{" "}
              bespoke IT solutions by providing the most efficient technological{" "}
              <br /> solutions to improve business profitability
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div>
        <Row className="mt-5 mb-5 mx-3">
          <Col>
            {" "}
            <img
              src="./img/who.png"
              width="600px"
              height=""
              alt="who we are"
            />{" "}
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="mt-5"> Who We Are </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Urna amet suspendisse nisi
              nisi nunc arcu consectetur in. Suspendisse nunc sodales commodo
              sed eu auctor porta pulvinar quisque. Tristique lacus et nisi sed
              vitae dolor urna. Malesuada ac et eu pellentesque gravida
              suscipit.
              <br />
              Lorem ipsum dolor sit amet consectetur. Urna amet suspendisse nisi
              nisi nunc arcu consectetur in. Suspendisse nunc sodales commodo
              sed eu auctor porta pulvinar quisque. Tristique lacus et nisi sed
              vitae dolor urna. Malesuada ac et eu pellentesque gravida
              suscipit.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <Row className="mt-5 mx-3">
          <Col>
            <div
              style={{
                width: "460px",
                height: "460px",
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
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Urna amet suspendisse
                nisi nisi nunc arcu consectetur in. Suspendisse nunc sodales
                commodo sed eu auctor porta pulvinar quisque. Tristique lacus et
                nisi sed vitae dolor urna. Malesuada ac et eu pellentesque
                gravida suscipit.
                <br />
                Lorem ipsum dolor sit amet consectetur. Urna amet suspendisse
                nisi nisi nunc arcu consectetur in. Suspendisse nunc sodales
                commodo sed eu auctor porta pulvinar quisque. Tristique lacus et
                nisi sed vitae dolor urna. Malesuada ac et eu pellentesque
                gravida suscipit.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row className="mt-5 mx-3">
          <Col
            style={{ textAlign: "center" }}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <h2>What We Do</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "400px ",
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
          <Col>
            {" "}
            <img src="./img/what.png" width="600px" alt="what we do" />{" "}
          </Col>
        </Row>
      </div>
    </main>
  </>
);

export default AboutUs;
