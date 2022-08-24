import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fluid from "../img/fluid.jpeg";
import {Card, Row, Col, Form, Button} from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
<>
<div>
    <main role="main" className="container">
    <Card className="mt-5">
    <img src={fluid} alt="fluid" width="" height="200" className="rounded"/>
      <Card.ImgOverlay>
        <br></br>
        <Card.Title className="text-center"><h3>We'd love to hear from you</h3></Card.Title>
        <Card.Text className="mt-3">
          <div className= "text-center"> Whether you have a question about services and products, </div>
          <div className= "text-center"> our team is ready to answer all your questions.</div>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <div>
    <h6 className="text-center mt-5" >Any question or remarks? just write us a message</h6>
    </div>
    <br></br>
    <div>
    <Row>
    <Col>
    <div>
    <main role="main" className="container">
    <div className="rounded" style={{backgroundColor: "#42ba96"}}>
    <div className="my-3 p-3 rounded shadow-sm">
    <h5 className="text-white"> Contact Information</h5>
    <br></br>
    <div className="text-white">Fill up the form and our team will get back
     to you within 24hours</div>
     <br></br>
     <div className="text-white">+98085643697</div>
     <br></br>
     <div className="text-white">hello@doyenify.tech</div>
     <br></br>
     <div className="text-white">61, community road, Akoka,
     Yaba, Lagos</div>
    </div>
    </div>
    </main>
    </div>
    </Col>
    <Col>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" placeholder="Write your message" rows={3} />
      </Form.Group>
      <Button variant="success" type="submit" className="">
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
    </div>
    <br></br> 
    </main>
</div>
</>    
  );
};
export default Contact