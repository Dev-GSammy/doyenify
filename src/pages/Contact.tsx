import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import {Facebook, Instagram, Linkedin, Twitter,Youtube, Whatsapp, Telegram, Telephone, Envelope} from 'react-bootstrap-icons';
import axios from "axios";
import { Formik, Field, FieldArray} from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../contact.css";
import { Audio } from 'react-loader-spinner'
import Footer from "../Footer";


const validationSchema = Yup.object().shape({
  Firstname: Yup.string().required("Required"),
  Lastname: Yup.string().required("Required"),
  Email: Yup.string().email("Invalid Email").required("Required"),
  Phone: Yup.number().required("Required"),
  Message: Yup.string().required("Required"),
  Services: Yup.array().required()
});

const Contact: React.FC = () => {
  const [ready, setReady] = useState(false);

  const spins = async() => {
    await new Promise(r => setTimeout(r, 3000));
    setReady(true)
  }
  useEffect(() => {
    spins();
  }, [])

  return (
    <>
      {
        ready ? (<>
            <div style={{ overflowX: "hidden" }}>
              <main role="main" className="container-fluid px-0">
                <div className=" contact-header-wrapper text-center">
                  <Card
                    className="bg-dark card-wrapper card-contact-wrapper"
                    style={{ borderRadius: "0"}}
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
                          Firstname: "",
                          Lastname: "",
                          Email: "",
                          Phone: "",
                          Message: "",
                          Services: []
                        }}

                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          axios.post('https://us-central1-doyenifypanelapi.cloudfunctions.net/app/contact-Message',  values)
                          .then(response => {
                            console.log('loggin in', response);
                            setSubmitting(false);
                            resetForm();
                            resetForm();
                            toast.success('We have received your Message, We will get back to you shortly');
                          })

                          .catch(error => {
                            console.error('error submitting form', error);
                            setSubmitting(false);
                            toast.error("Sorry we could not receive your Message. Please check your connection and try again")
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
                                  name="Firstname"
                                  value={values.Firstname}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={!!errors.Firstname}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.Firstname}
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
                                  name="Email"
                                  value={values.Email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={!!errors.Email}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.Email}
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
                                  name="Lastname"
                                  value={values.Lastname}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={!!errors.Lastname}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.Lastname}
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
                                  name="Phone"
                                  value={values.Phone}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={!!errors.Phone}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.Phone}
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
                                <FieldArray name="Services">
                                  {() => (
                                    <div className="checkbox_container" style={{display: "flex", flexDirection: "column",
                                      justifyContent: "space-between" }}>
                                    <label className="checkbox_label">
                                      <Field className="me-3" type="checkbox" name="Services" value="graphicDesign" ></Field>
                                        Graphic Design
                                    </label>
                                    <label className="checkbox_label">
                                      <Field className="me-3" type="checkbox" name="Services" value="videoEditing"></Field>
                                        Video Editing
                                    </label>
                                    <label className="checkbox_label">
                                      <Field className="me-3" type="checkbox" name="Services" value="webDesign" ></Field>
                                        Web Design (UI/UX)
                                    </label>
                                    <label className="checkbox_label">
                                      <Field className="me-3" type="checkbox" name="Services" value="webDevelopment" ></Field>
                                        Web Development
                                    </label>
                                    <Form.Control.Feedback type="invalid">
                                  {errors.Phone}
                                </Form.Control.Feedback>
                                    </div>
                                    
                                  )}
                                </FieldArray>
                                
                                <Form.Control.Feedback type="invalid">
                                  {errors.Services}
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
                                  placeholder="Write your Message"
                                  rows={3}
                                  name="Message"
                                  value={values.Message}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={!!errors.Message}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.Message}
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
                <Footer />
            </main>
            </div>
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
  );
};
export default Contact;
