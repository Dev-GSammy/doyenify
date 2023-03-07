import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const sections = [
  {
    url: "./img/pharm.jpg",
    title: "Pharm Solution",
    text: "Our pharm solution affords patients easy access to prescription medications from our online retail pharmacy",
    buttonText: "Read More",
  },
  {
    url: "./img/payrool.jpg",
    title: "Payroll Solution",
    text: "The Doyenify payroll solution is a simple-to-use software that allows organisations to integrate performance measurement.",
    buttonText: "Read More",
  },
  {
    url: "./img/ecommerce.jpg",
    title: "E-Commerce",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Read More",
  },
];

const WhatWeDo = () => (
  <>
    <main role="main" className="container-fluid px-0">
      <div className="text-center">
        <Card className="bg-dark text-white" style={{ borderRadius: 0 }}>
          <Card.Img src="./img/about.png" alt="about" />
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
            <Card.Title className="text-center" style={{ color: "#00FF38" }}>
              <h2>What We Do</h2>
            </Card.Title>
            <Card.Text>
              We would be responsible for coding and building the platform that
              <br />
              allows users to access educational content. This would likely
              <br />
              involve using programming languages such as Java, Python, or
              JavaScript to develop the backend and frontend of the platform.
              <br />
              We would also need to maintain and update the platform over time
              to ensure it remains secure, efficient, and up-to-date.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div className="mt-5">
        <Container>
          <Row className="mb-5 text-center">
            {sections.map(({ url, title, text, buttonText }) => (
              <Col>
                <Card style={{ width: "18rem" }} className="mb-3">
                  <img src={url} alt={title} className="rounded" />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="success">{buttonText}</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </main>
  </>
);

export default WhatWeDo;
