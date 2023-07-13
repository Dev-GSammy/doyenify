import React, {useState, useEffect} from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../aboutus.css';
import { Link } from 'react-router-dom';
import { ArrowRightShort} from 'react-bootstrap-icons';
import { Audio } from 'react-loader-spinner'
import Footer from "../Footer";


const AboutUs = () => {
  const [ready, setReady] = useState(false);

  const spins = async() => {
    await new Promise(r => setTimeout(r, 100));
    setReady(true)
  }
  useEffect(() => {
    spins();
  }, [])

  return (
  <>
    {
        ready ? (<>
            <main role="main" className="container-fluid px-0">
              <div className="text-center about-header-wrapper">
                <Card className="bg-dark text-white card-about-wrapper" style={{ borderRadius:  "0"  }}>
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
                  <div>
                    <Link to="/Contact" className="brand">
                    <Button
                      className="mt-5 px-5 py-1 about-button"
                      style={{
                      backgroundColor: "#387846",
                      color: "#ffffff",
                      borderRadius: " 50px",
                      border: " 2px solid #ffffff",
                      fontWeight: "600",
                      }}
                    >
                      {" "}
                      Request A Quote{" "}
                    </Button>
                    </Link>
                    </div>
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
                    <div className="about-quote-container"> 
                    <Link to="/Contact" className="about-quote-link"> 
                    <h4>Request A Quote <ArrowRightShort className="qoute-arrow"/> </h4>
                    </Link>
                    </div>
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
                    <div className="about-quote-container"> 
                    <Link to="/Contact" className="about-quote-link"> 
                    <h4>Request A Quote <ArrowRightShort className="qoute-arrow"/> </h4>
                    </Link>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="mt-5 mx-3">
                  {/* <Col
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
                  </Col> */}
                  <h2 className="text-center mb-3">What We Do</h2>
                  <Col className=" wordcloud-col col-12 col-sm-6  d-flex flex-column align-items-center justify-content-center">
                  
                    {" "}
                    <Link to="/services" className="wordcloud"> <img className="wordcloud-img" src="./img/whatwedo.png" width="600px" height="600px" alt="what we do" /> </Link>
                  {" "}
                  </Col>
                  <Col className="col-12 col-sm-6">
                    {" "}
                    <img src="./img/what.png" width="100%" height="auto" alt="what we do" />{" "}
                  </Col>
                </Row>
              </div>
              <Footer />
            </main>
            </>):(<>
              <div style={{height: "1000px", backgroundColor: "#dfe6e1"}}>
                  <Audio
                  height="80"
                  width="80"
                  // radius="9"
                  color="green"
                  ariaLabel="loading"
                  wrapperStyle={{alignItems: "center", justifyContent: "center",verticalAlign: "middle", margin: "auto", position: "absolute",
                  top: "0", left: "0", bottom: "0", right: "0"}}
                  // wrapperClass
                  />
              </div>  
           </>)
      } 
    </>
)};

export default AboutUs;
