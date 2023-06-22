import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import "../whatwedo.css";

// const sections = [
//   {
//     url: "./img/pharm.jpg",
//     title: "Pharm Solution",
//     text: "Our pharm solution affords patients easy access to prescription medications from our online retail pharmacy",
//     buttonText: "Read More",
//   },
//   {
//     url: "./img/payrool.jpg",
//     title: "Payroll Solution",
//     text: "The Doyenify payroll solution is a simple-to-use software that allows organisations to integrate performance measurement.",
//     buttonText: "Read More",
//   },
//   {
//     url: "./img/ecommerce.jpg",
//     title: "E-Commerce",
//     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     buttonText: "Read More",
//   },
// ];

const WhatWeDo = () => (
  <>
    <main role="main" className="container-fluid px-0">
      <div className="text-center whatwedo-header-wrapper">
        <Card className="bg-dark text-white" style={{ borderRadius: 0, height: "495px" }}>
          <Card.Img src="./img/about.png" alt="about" style={{ height: "100%", objectFit: "cover" }} />
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
            <Card.Title className="text-center" style={{ color: "#00FF38" }}>
              <h2>What We Do</h2>
            </Card.Title>
            <Card.Text className="whatwedo-card-text mt-4" style={{ fontSize: "20px" }}>
              We would be responsible for coding and building the platform that
              <br /> 
              allows users to access educational content.<div className="spacer13"></div> This would likely
              involve using programming languages such as Java, Python, or
              JavaScript to develop the backend and frontend of the platform.
              <div className="spacer13"></div>
              We would also need to maintain and update the platform over time
              to ensure it remains secure, efficient, and up-to-date.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div className="mt-5">
        <Container style={{ marginBottom: "200px", marginTop: "60px"}} >
          <div className="whatwedo_title">
            <h3>Our range of services</h3>
            <p>At Doyenify, we are committed to delivering exceptional 
              service to our clients. We understand that each client has 
              unique needs, and we tailor our services to meet those specific 
              requirements. </p>
          </div>
          <Row className="text-center gx-1 gy-0 px-0 mb-5 justify-content-center img-row">
            <Col className="imgCol">
              <div className="img-wrapper">
                <img src="../img/whatwedoimg_1.png"></img>
                <h3>Graphic <br></br> Design</h3>
              </div>
            </Col>
            <Col className="imgCol">
              <div className="img-wrapper">
                <img src="../img/whatwedoimg_2.png"></img>
                <h3>Video <br></br> Editing</h3>
              </div>
            </Col>
            <Col className="imgCol">
              <div className="img-wrapper">
                <img src="../img/whatwedoimg_3.png"></img>
                <h3>Website <br></br> Development</h3>
              </div>
            </Col>
          </Row>
          <div className="whatwedo_title">
            <h3>Our range of products</h3>
            <p>Our team of IT experts have worked on a number of projects 
              to deliver top-quality products including effective and unique applications.
              Check out some of our works highlighted below. </p>
          </div>
          <Row className="text-center gx-1 gy-0 justify-content-center">
            <Col className="imgCol">
              <div className="img-wrapper">
                <img src="../img/booking_img.jpg"></img>
                <h3>Booking <br></br>App</h3>
              </div>
            </Col>
            <Col className="imgCol">
              <div className="img-wrapper">
                <img src="../img/payroll_img.jpg"></img>
                <h3>Pay Roll <br></br>App</h3>
              </div>
            </Col>
            <Col className="imgCol">
              <div className="img-wrapper">
                <img src="../img/pharmacy_img.jpg"></img>
                <h3>Pharmacy <br></br>App</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  </>
);

// {sections.map(({ url, title, text, buttonText }) => (
//   <Col className="whatwedo_card" style={{ maxWidth: "fit-content" }}>
//     <Card style={{ width: "18rem" }} className="mb-3">
//       <img src={url} alt={title} className="rounded" />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{text}</Card.Text>
//         <Button variant="success">{buttonText}</Button>
//       </Card.Body>
//     </Card>
//   </Col>
// ))}

export default WhatWeDo;
