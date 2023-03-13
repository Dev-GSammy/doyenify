import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import {Facebook, Instagram, Linkedin, Twitter,Youtube, Whatsapp, Telegram, Telephone, Envelope} from 'react-bootstrap-icons';
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../contact.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number().required(),
  message: Yup.string().required(),
});

const Contact: React.FC = () => {

  return (
    <>
      <div>
        <main role="main" className="container-fluid px-0">
          <div className=" contact-header-wrapper text-center">
            <Card
              className="bg-dark card-wrapper h-100"
              style={{ borderRadius: "0", height: "100%" }}
            >
              <Card.Img src="../img/contactImg.jpg" alt="ct" style={{ height: "100%", objectFit: "cover" }}/>
              <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center imgoverlay">
                <Card.Title
                  className="text-center"
                  style={{ color: "#00FF38" }}
                >
                  {" "}
                  <h2> We'd love to hear from you </h2>
                </Card.Title>
                <Card.Text
                  className="contact-card-text"
                  style={{ fontSize: "1.25em" }}
                >
                  Whether you have a question about services and products, our
                  team is ready to answer all your questions.
                </Card.Text>
                <div className="icon-container">
                  <a className="social-media"
                    href="https://www.linkedin.com/company/doyenify/"
                    target="_blank"
                  >
                    <Linkedin className='header-link'/>
                  </a>
                  <a className="social-media"
                    href="https://twitter.com/DOYENIFY?t=iIP1-2SvQTGkMvpng9Fddw&s=09"
                    target="_blank"
                  >
                    <Twitter className='header-link'/>
                  </a>
                  <a className="social-media" href="#">
                    <Whatsapp className='header-link'/>
                  </a>
                  <a className="social-media" href="#">
                    <Telegram className='header-link'/>
                  </a>
                  <a className="social-media" href="#">
                    <Youtube className='header-link'/>
                  </a>
                  <a className="social-media" href="#">
                    <Facebook className='header-link'/>
                  </a>
                  <a className="social-media"
                    href="https://instagram.com/doyenify?igshid=ZDdkNTZiNTM="
                    target="_blank"
                  >
                    <Instagram className='header-link'/>
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>

          <div
            className="container"
            style={{ paddingTop: "6.25rem", marginBottom: "6.25rem" }}
          >
            <Row>
              <Col
                className="col-12 order-2 col-md-4 order-md-1 h-100"
                style={{ height: "100%" }}
              >
                <div style={{ paddingBottom: "6rem" }}>
                  <main role="main" className="container h-100">
                    <div
                      className="rounded-4"
                      style={{ backgroundColor: "#000000" }}
                    >
                      <div className="p-4 rounded shadow-sm contact-info">
                        <h5 className="text-white"> Contact Information</h5>
                        <div className="text-white mt-0">
                          Fill up the form and our team will get back to you
                          within 24hours
                        </div>
                        <br></br>
                        <div><a href="mailto:info@doyenify.tech"  className="text-white" style={{ textDecoration: "none" }}>
                          <Envelope /> info@doyenify.tech</a>
                        </div>
                        <br></br>
                        <div className="text-white pb-5">
                          <h6>Head Office</h6>
                          Juhan Sutiste tee 52 - 65 Tallinn Estonia
                          <div className="mb-3"><a href="tel:+37256704920" className="text-white" style={{ textDecoration: "none" }}>
                          <Telephone /> +37256704920</a>
                          </div>
                          <h6 className="mt-2">Nigeria Office</h6>
                          3, Agboola Kolawole Str, Awoyaya, Lagos
                          <div><a href="tel:+2348071005481" className="text-white" style={{ textDecoration: "none" }}>
                          <Telephone /> +2348071005481</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </Col>
              <Col className="col-12 order-1 col-md-8 order-md-2">
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                  }}

                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                      console.log('loggin in', values);
                      setSubmitting(false);
                      resetForm();
                      toast.success('We have received your message, We will get back to you shortly');
                    }, 400);
                  }}
                 
                  validationSchema={validationSchema}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    handleBlur,
                    isSubmitting
                  }) => (
                    <Form
                      noValidate
                      onSubmit={handleSubmit}
                      className="row form-wrapper"
                    >
                      <div className="col-12 col-md-6">
                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom01"
                        >
                          <Form.Label className="input-label">
                            First Name
                          </Form.Label>
                          <Form.Control
                            className="contact-input"
                            type="text"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.firstName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom01"
                        >
                          <Form.Label className="input-label">
                            Email Address
                          </Form.Label>
                          <Form.Control
                            className="contact-input"
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>

                      <div className="col-12 col-md-6">
                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom01"
                        >
                          <Form.Label className="input-label">
                            Last Name
                          </Form.Label>
                          <Form.Control
                            className="contact-input"
                            type="text"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.lastName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom01"
                        >
                          <Form.Label className="input-label">Phone</Form.Label>
                          <Form.Control
                            className="contact-input"
                            type="text"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.phone}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.phone}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>

                      <div className="col-12">
                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom01"
                        >
                          <Form.Label className="input-label">
                            Message
                          </Form.Label>
                          <Form.Control
                            className="contact-input"
                            as="textarea"
                            placeholder="Write your message"
                            rows={3}
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.message}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                      <div className="col-10"></div>
                      <Button
                        className="btn-primary col-2 send-btn submit"
                        disabled={isSubmitting}
                        variant="success"
                        type="submit"
                      >
                        Send
                      </Button>

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
export default Contact;
