import React from "react";
import { useEffect, useState, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import "../ourTeam.css";


const OurTeam = () => {

  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  const options = {
    rootMargin: '0px',
    threshold: 0
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return (

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
      className="container-fluid mt-5 ourteam_section"
      style={{ marginTop: "2rem", padding: "16px 50px 100px 50px" }}
    >
      <div className= {`ourteam_title fade-in ${isVisible ? 'visible'  : ''}`} ref={targetRef}><h3>Meet the doyens</h3></div>
      <Row className="gx-5 mb-3">
        <Col className="col-12 col-sm-4">
          <Card className=  {`border-0 team-profile-card fade-in ${isVisible ? 'visible'  : ''}`} ref={targetRef}>
            <Card.Img className="team-profile-img" src="./img/oluyide_ourteam_img.jpg" />
            <div className="overlay-desc-top">
              <h3>Gbenga Oluyide</h3>
              <p>
                Gbenga (CEO) is a guru in Building interactive and user-centered web 
                applications to scale. Also he is vast in Contributing and participating 
                in the qualitative advancement of an already existing business, systems, 
                and new inventions/ideas; to give back qualitative service work based on 
                the rigorous personal skills and educational training and to learn more 
                daily in the entire process.</p>
            </div>
            <Card.Body className="px-0">
              <Card.Title className="mb-2">Gbenga Oluyide</Card.Title>
              <Card.Text className="font-italic" >Founder & CEO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-sm-4">
          <Card className={`border-0 team-profile-card fade-in ${isVisible ? 'visible'  : ''}`} ref={targetRef}>
            <Card.Img className="team-profile-img" src="./img/solagbade_ourteam_img.jpg" />
            <div className="overlay-desc-top">
              <h3>Enitilo Solagbade</h3>
              <p>
              Sola is a software engineer with a passion for creating innovative 
              and efficient software solutions. “Combining my technical skills 
              with my creative passions has been a fulfilling and rewarding journey, 
              and I am excited to continue exploring new ways to express myself 
              through software, photography, and music.”
              </p>
            </div>
            <Card.Body className="px-0">
              <Card.Title className="mb-2">Enitilo Solagbade</Card.Title>
              <Card.Text>Tech Lead</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col-12 col-sm-4">
          <Card className={`border-0 team-profile-card fade-in ${isVisible ? 'visible'  : ''}`} ref={targetRef}>
            <Card.Img className="team-profile-img" src="./img/timmy_ourteam_img.jpg" />
            <div className="overlay-desc-top">
              <h3>Timilehin Ogunwole</h3>
              <p>Timilehin is a business analyst with a wide Scope For thought. 
                He helps the organization to identify, analyze, and solve business 
                problems and improve processes. He is responsible for gathering and 
                analyzing data, identifying areas for improvement, and developing 
                recommendations to enhance business operations. He also  creates 
                reports, dashboards, and visualizations to communicate his findings 
                and recommendations with the team.</p>
            </div>
            <Card.Body className="px-0">
              <Card.Title className="mb-2">Timilehin Ogunwole</Card.Title>
              <Card.Text>Business Analyst/Product Owner</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="gx-5 mb-3">
        <Col className="col-12 col-sm-4">
          <Card className="border-0 team-profile-card">
            <Card.Img className="team-profile-img"src="./img/ifedolapo_ourteam_img.jpg" />
            <div className="overlay-desc-top">
              <h3>Ifedolapo Ayoola</h3>
              <p>Ifedolapo is a web developer/Frontend Engineer with a vast array of 
                knowledge and experience in many different front end and back end 
                languages, responsive frameworks, databases, and best code practices. 
                He loves to speak about CSS, React, Git, Github. "I'm just making the 
                world an easier place a day at a time with code".</p>
            </div>
            <Card.Body className="px-0">
              <Card.Title className="mb-2">Ifedolapo Ayoola</Card.Title>
              <Card.Text className="font-italic">Full Stack Software Developer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-sm-4">
          <Card className="border-0 team-profile-card">
            <Card.Img className="team-profile-img" src="./img/ifeoluwa_ourteam.jpg" />
            <div className="overlay-desc-top">
              <h3>Ifeoluwa Olagbemi</h3>
              <p>Ifeoluwa is a full stack software developer and skilled product 
                designer with expertise in user-centered design and product development. 
                With a passion for solving complex problems, he leverages his strong 
                visual design and prototyping skills to create innovative products 
                that meet user needs. He has a keen eye for detail and a collaborative 
                spirit, making him an invaluable asset to any team.</p>
            </div>
            <Card.Body className="px-0">
              <Card.Title className="mb-2">Ifeoluwa Olagbemi</Card.Title>
              <Card.Text>Full Stack Software Developer/Product Designer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-sm-4">
          <Card className="border-0 team-profile-card">
            <Card.Img className="team-profile-img otegbayo_img " src="./img/otegbayo_ourteam_img.jpg" />
            <div className="overlay-desc-top">
              <h3>Temitayo Otegbayo</h3>
              <p>T. Otegbayo is a Software QA Engineer Lead with years of 
                experience in both manual and automation testing. He has 
                led many automation teams in setting up automation framework. 
                Tayo has extensive experience in mobile and web applications testing.  
                He is a leader par excellence who is committed to seeing a team delivers 
                quality software products.</p>
            </div>
            <Card.Body className="px-0">
              <Card.Title className="mb-2">Temitayo Otegbayo</Card.Title>
              <Card.Text>Founder/QA Lead</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </main>
  )
};

export default OurTeam;
