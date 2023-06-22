import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import {Facebook, Instagram, Linkedin, Twitter,Youtube, Whatsapp, Telegram, Telephone, Envelope} from 'react-bootstrap-icons';
import axios from "axios";
import { Formik, Field, FieldArray} from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../contact.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number().required("Required"),
  message: Yup.string().required("Required"),
  servicesCheckbox: Yup.array().required()
});

const Contact: React.FC = () => {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <main role="main" className="container-fluid px-0">
          <div className=" contact-header-wrapper text-center">
            <Card
              className="bg-dark card-wrapper h-100"
              style={{ borderRadius: "0", height: "495px" }}
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
                  Do you have enquiries about our services and products? 
                  Our Customer Relation Personnel is willing to answer all your questions.  
                  Please click any of the icons below to contact us through your preferred 
                  social platform.
                </Card.Text>

                  <div className="scroll_button_container">
                    <a href="#requestAQuoteText">
                    <img src="../img/scroll-down-icon.png" 
                      width="40px" 
                      height="auto"
                      style={{ filter: "invert(100%) sepia(7%) saturate(2%) hue-rotate(41deg) brightness(105%) contrast(100%)" }}>
                    </img>
                    </a>
                  </div>

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
                  <a className="social-media" href="https://t.me/doyenify"
                    target="_blank"
                  >
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
                  <a className="social-media contact_linktree_icon"
                    href="https://linktr.ee/doyenify"
                    target="_blank"
                  >
                    <img src="../img/linktree_logo.png"></img>
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>

          <div
            className="container"
            style={{ paddingTop: "6.25rem", marginBottom: "6.25rem" }}
          >
            <div id="requestAQuoteText"  style={{ textAlign: "center" }}>
              <p className="fs-4">Are you sold on our expertise and would you like to hire 
                us for your website, mobile app, video editing, or design?
                Kindly fill the form below to request a quote.
              </p>
            </div>
            <div style={{ textAlign: "center", marginBottom: "40px"}}><h4>Request A Quote</h4></div>
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
                    servicesCheckbox: []
                  }}

                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    axios.post('https://sheet.best/api/sheets/3d3daed8-f416-44c0-b33b-8da2fcce6814', values)
                    .then(response => {
                      console.log('loggin in', response);
                      setSubmitting(false);
                      resetForm();
                      resetForm();
                      toast.success('We have received your message, We will get back to you shortly');
                    })

                    .catch(error => {
                      console.error('error submitting form', error);
                      setSubmitting(false);
                      toast.error("Sorry we could not receive your message. Please check your connection and try again")
                    });
                    resetForm();
                  }}
                 
                  validationSchema={validationSchema}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    handleBlur,
                    isSubmitting,
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
                          className="mb-5"
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

                      <div className="col-12" style={{ paddingLeft: "20px" }}>
                        <Form.Group
                          className="mb-5"
                          controlId="validationCustom01"
                        >
                          <Form.Label className="input-label">
                            Choose one or more services
                          </Form.Label>
                          <FieldArray name="servicesCheckbox">
                            {() => (
                              <div className="checkbox_container" style={{display: "flex", flexDirection: "column",
                                justifyContent: "space-between" }}>
                              <label className="checkbox_label">
                                <Field className="me-3" type="checkbox" name="servicesCheckbox" value="graphicDesign" ></Field>
                                  Graphic Design
                              </label>
                              <label className="checkbox_label">
                                <Field className="me-3" type="checkbox" name="servicesCheckbox" value="videoEditing"></Field>
                                  Video Editing
                              </label>
                              <label className="checkbox_label">
                                <Field className="me-3" type="checkbox" name="servicesCheckbox" value="webDesign" ></Field>
                                  Web Design (UI/UX)
                              </label>
                              <label className="checkbox_label">
                                <Field className="me-3" type="checkbox" name="servicesCheckbox" value="webDevelopment" ></Field>
                                  Web Development
                              </label>
                              <Form.Control.Feedback type="invalid">
                            {errors.phone}
                          </Form.Control.Feedback>
                              </div>
                              
                            )}
                          </FieldArray>
                          
                          <Form.Control.Feedback type="invalid">
                            {errors.servicesCheckbox}
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
                        Request
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