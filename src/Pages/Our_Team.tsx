import React from 'react'
import Rectangle73 from "../img/Rectangle73.png";
import Rectangle74 from "../img/Rectangle74.png";
import Rectangle75 from "../img/Rectangle75.png";
import Rectangle76 from "../img/Rectangle76.png";
import Rectangle77 from "../img/Rectangle77.png";
import Rectangle78 from "../img/Rectangle78.png";
import Rectangle79 from "../img/Rectangle79.png";
import Rectangle80 from "../img/Rectangle80.png";
import teamImg from "../img/teamImg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from 'react-bootstrap';
import "../ourTeam.css";




const OurTeam: React.FC = () => {
    return (
        <main role="main">
        <div className=" header-wrapper text-center">
         
         <Card className="bg-dark text-white h-100">
          <Card.Img src={teamImg} />
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center imgoverlay">
          <Card.Title className="text-center" style={{ color: "#00FF38" }}> <h2> Our Team </h2></Card.Title>
          <Card.Text className="small-text" style={{ fontSize: "1em" }}>
          Meet our team of developers, creators, designers, and world-class <br /> problem solver
          <br /> <br />To the company our customers want us to be , it takes an eclectic of passionate
          operators. <br /> Get to know the people leading the way at Doyenify
          </Card.Text>
         </Card.ImgOverlay>
         </Card>
        </div>
                <div className="container-fluid mt-5" style={{ marginTop: "6.3rem",
                padding: "50px 100px 100px 100px" }}>
                    <Row className="gx-5 mb-3">
                        <Col>
                            <Card className="border-0" >
                                <Card.Img src={Rectangle73} />
                                <Card.Body className="px-0">
                                    <Card.Title className="mb-2">
                                        Gbenga Oluyide
                                    </Card.Title>
                                    <Card.Text className="font-italic">
                                        Founder & CEO
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0">
                                <Card.Img src={Rectangle74} />
                                <Card.Body className="px-0">
                                    <Card.Title className="mb-2">
                                        Enitilo Solagbade
                                    </Card.Title>
                                    <Card.Text>
                                        Founder & CEO
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0">
                                <Card.Img src={Rectangle75} />
                                <Card.Body className="px-0">
                                    <Card.Title className="mb-2">
                                        Abimbola Opakunle
                                    </Card.Title>
                                    <Card.Text>
                                        Team Lead, Software Engineer
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="gx-5 mb-3">
                        <Col>
                            <Card className="border-0" >
                                <Card.Img src={Rectangle76} />
                                <Card.Body className="px-0">
                                    <Card.Title className="mb-2">
                                        Ayomide Awoyemi
                                    </Card.Title>
                                    <Card.Text className="font-italic">
                                        Human Resource Manager
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0">
                                <Card.Img src={Rectangle77} />
                                <Card.Body className="px-0">
                                    <Card.Title className="mb-2">
                                        Abayomi Oluyide
                                    </Card.Title>
                                    <Card.Text>
                                        Intern
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0">
                                <Card.Img src={Rectangle78} />
                                <Card.Body className="px-0">
                                    <Card.Title className="mb-2">
                                        Timilehin Ogunwole
                                    </Card.Title>
                                    <Card.Text>
                                        Product Designer
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="gx-5 mb-3">
                        <Col className="col-sm-4">
                            <Card className="border-0" >
                                <Card.Img src={Rectangle79} />
                                <Card.Body className="px-0">
                                    <Card.Title className="mb-2">
                                        Ifedolapo Ayoola
                                    </Card.Title>
                                    <Card.Text className="font-italic">
                                        Software Developer
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-sm-4">
                            <Card className="border-0">
                                <Card.Img src={Rectangle80} />
                                <Card.Body className="px-0">
                                    <Card.Title className="mb-2">
                                        Ifeoluwa Olagbemi
                                    </Card.Title>
                                    <Card.Text>
                                        Product Designer
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
        </main>
    )
}

export default OurTeam;