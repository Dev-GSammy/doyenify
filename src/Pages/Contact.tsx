import React  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fluid from "../img/fluid.jpeg";
import {Card, Row, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { Formik, } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required(), 
});

const Contact: React.FC = () => {

  const notify = () => toast("We have recieved your message, We would get back to you shortly!");

//  Form states
// const [email, setEmail] = useState('');
// const [message, setMessage] = useState('');

  const handleSubmit=(email:string, message:string)=>{
    console.log(email)
    // e.preventDefault();
    const data ={
      Email:email,
      Message:message,
    }
      axios.post('https://sheet.best/api/sheets/00eab23e-ab27-4413-b033-ce75e35eb3d3', data). then ((response)=>{
      console.log(response);
      // clearing form fields
      // setEmail ('');
      // setMessage ('');
      
      }) 
    }

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

    <Formik
      validationSchema={schema}
      onSubmit={(values, actions) => handleSubmit(values.email, values.message)
      // console.log(values)
      }
      initialValues={{
        email: '',
        message: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,      
        errors,

      }) => (
    
      <Form noValidate onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
         type="text"
         placeholder="Enter your email address"
         name="email"
         value={values.email}
         onChange={handleChange}
         isInvalid={!!errors.email}
       />
       <Form.Control.Feedback type="invalid">
         {errors.email}
       </Form.Control.Feedback>

      </Form.Group>
      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Message</Form.Label>
        <Form.Control 
        as="textarea" 
        placeholder="Write your message" 
        rows={3} 
        name="message"
        value={values.message}
        onChange={handleChange}
        isInvalid={!!errors.message}
       />
       <Form.Control.Feedback type="invalid">
         {errors.message}
       </Form.Control.Feedback>
      </Form.Group>
      <Button variant="success" type="submit" onClick={notify}>Submit </Button>
      <ToastContainer />
    </Form>
    )}
    </Formik>

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