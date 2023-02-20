import React  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fluid from "../img/fluid.jpeg";
import {Card, Row, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { Formik, } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../contact.css';
import contactImg from "../img/contactImg.jpg";


const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.number().required(),
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
          <main role="main" className="container-fluid px-0">
              <div className=" header-wrapper text-center">
              
              <Card className="bg-dark text-white h-100">
                <Card.Img  src={contactImg} />
                <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center imgoverlay">
                <Card.Title className="text-center" style={{ color: "#00FF38" }}> <h2> We'd love to hear from you </h2></Card.Title>
                <Card.Text className="small-text" style={{ fontSize: "1em" }}>
                Whether you have a question about services and products, our team is ready to answer all your questions.
                </Card.Text>
              </Card.ImgOverlay>
              </Card>
              </div>


          <div className="container" style={{ paddingTop: "6.25rem", marginBottom: "6.25rem" }}>
          <Row>
          <Col className="col-12 order-2 col-md-4 order-md-1 h-100" style={{ height: "100%" }}>
          <div style={{ paddingBottom: "6rem" }}>
            <main role="main" className="container h-100">
            <div className="rounded-4" style={{backgroundColor: "#000000"}}>
            <div className="p-4 rounded shadow-sm">
            <h5 className="text-white"> Contact Information</h5>
            <div className="text-white mt-0">Fill up the form and our team will get back
            to you within 24hours</div>
            <br></br>
            <div className="text-white">+98085643697</div>
            <br></br>
            <div className="text-white">hello@doyenify.tech</div>
            <br></br>
            <div className="text-white pb-5">61, community road, Akoka,
            Yaba, Lagos</div>
            </div>
            </div>
            </main>
          </div>
          </Col>
          <Col className="col-12 order-1 col-md-8 order-md-2">

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              message: '',
            }}

            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log("Loggin in", values)
              }, 500)
            }}

            // onSubmit={(values, actions) => handleSubmit(values.email, values.message)
            //   // console.log(values)
            //   }
            validationSchema={schema}
            
            
          >
            {({
              handleSubmit,
              handleChange,
              values,      
              errors,

            }) => (
          
            <Form noValidate onSubmit={handleSubmit} className="row form-wrapper">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label className="input-label">First Name</Form.Label>
                  <Form.Control className="contact-input"
                  type="text"
                  name="firstName"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label className="input-label">Email Address</Form.Label>
                <Form.Control className="contact-input"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
              </Form.Group>
              </div>

              <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label className="input-label">Last Name</Form.Label>
                  <Form.Control className="contact-input"
                  type="text"
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
                <Form.Label className="input-label">Phone</Form.Label>
                <Form.Control className="contact-input"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
              </Form.Group>
              </div>

              <div className="col-12">
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label className="input-label">Message</Form.Label>
                  <Form.Control className="contact-input"
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
              </div>
                <div className="col-10"></div>
                <Button className="btn-primary col-2 send-btn"  variant="success" type="submit" onClick={notify} style={{ border: "none", borderRadius: "50px", backgroundColor: "#00ff38", color: "#121212", fontWeight: "600" }}>Send </Button>
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