import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
 import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';


const Contact: React.FC = () => {
  return (
<>
<div>
    <main role="main" className="container">
    <div>
    <h2 className="text-center text-success mt-3" >Contact Us</h2>
    <h6 className="text-center" >Any question or remarks? just write us a message</h6>
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
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="First Name" placeholder="Enter First Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="Phone" placeholder="Phone Number" />
      </Form.Group> 
    </Col>
    
    <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="Last Name" placeholder="Enter Last Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control type="message" placeholder="Write your message here" />
        <Form.Text className="text-muted">
        </Form.Text>
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