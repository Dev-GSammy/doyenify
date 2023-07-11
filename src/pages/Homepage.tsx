import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { ArrowRightShort, ChevronDoubleLeft, ChevronDoubleRight} from 'react-bootstrap-icons';
import {Carousel} from 'react-bootstrap';
import { Drift } from 'react-live-chat-loader'
import "bootstrap/dist/css/bootstrap.min.css";
import '../homepage.css';
import { Link } from 'react-router-dom';

const divStyle = {
  backgroundColor: "#F4FDF4",
  width: "120px",
  height: "120px",
  borderRadius: "50px",
  marginLeft: "115px",
};

const Home = () => {
  

  

  return (
    <div>
    <main role="main" className="container-fluid px-0">
      <div className="text-center home-header-wrapper">
      <Carousel >
              <Carousel.Item>
              <div className='carousel-div caroheight' >
                <img className="caroimg" src="./img/home.png" alt="...">

                </img>
                  <Carousel.Caption className='caption'>
                    <br/>
                    <br/>
                    <Card className="bg-transparent border-transparent text-white cardcon" style={{padding: "0", borderColor: "#ffffff00"}}>
                      
                      {/* <Card.Img src="./img/home.png" alt="Home"  style={{ height: "100%", objectFit: "cover"}}/>

                          <Card.ImgOverlay  className="overlay-container d-flex flex-column align-items-center justify-content-center">
                           */}
              
                          <Card.Title  className="text-center  marg2">
                          {" "}
                          
                          
                          <h2 > Welcome to Doyenify Technologies </h2>
                        </Card.Title>
                        <Card.Text className="home-card-text " >
                      <br />
                    
                      <p  style={{fontSize: "20px"}} > You are ready to join our global network of happy and excited clients.
                      We help Individuals and organizations solve problems with bespoke IT solutions 
                      by providing the most efficient technological solutions to improve business profitability.

                      </p>
                      
                      </Card.Text>
                      <br/>
                      <div className= "button-wrapa" >
                        <div className="button-wrapa-one" >
                      <Link to="/our_work" className="brand">
                        <Button
                          className=" px-5 py-1 home-button doyenbtnview"
                          
                        >
                          {" "}
                          View Our Work{" "}
                        </Button>
                        </Link>
                        </div>
                        <div>
                        <Link to="/Contact" className="brand">
                        <Button
                          className=" px-5 py-1 home-button doyenbtnrequest"
                          
                        >
                          {" "}
                          Request A Quote{" "}
                        </Button>
                        </Link>
                        </div>
                        </div>
                        
                       
                       
                        {/* </Card.ImgOverlay> */}
                      </Card>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className='carousel-div caroheight' >
                <img className="caroimg" src="./img/doyenacademy.png" alt="...">

                </img>
                  <Carousel.Caption className='caption'>
                    <br/>
                    <br/>
                    <Card className="bg-transparent border-transparent text-white cardcon" style={{padding: "0", borderColor: "#ffffff00"}}>
                      
                      {/* <Card.Img src="./img/home.png" alt="Home"  style={{ height: "100%", objectFit: "cover"}}/>

                          <Card.ImgOverlay  className="overlay-container d-flex flex-column align-items-center justify-content-center">
                           */}
                          <Card.Title className="text-center 2 marg" >
                          {" "}
                          
                          
                          <h2 > Doyenify Academy </h2>
                        </Card.Title>
                        <Card.Text className="home-card-text 2" >
                      <br />
                      <p style={{ fontSize: "20px", paddingLeft: "15px", paddingRight: "15px"}}> At this Academy we offer you courses that will help you thrieve in the job market,
                        remember You don't have to be great to start, but you have to start to be great - zig Ziglar.

                      </p>


                      </Card.Text>
                      <br/>

                      <div className="button-wrapa">
                        <div className="button-wrapa-one" >
                      <Link to="/our_work" className="brand">
                        <Button
                          className="px-5 py-1 home-button"
                          style={{
                          backgroundColor: "#757F77",
                          color: "#ffffff",
                          borderRadius: " 50px",
                          border: " 2px solid #ffffff",
                          fontWeight: "600",
                          }}
                        >
                          {" "}
                          View Our Work{" "}
                        </Button>
                        </Link>
                        </div>
                        <div>
                        <Link to="/Contact" className="brand">
                        <Button
                          className="px-5 py-1 home-button"
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
                        </div>
                        
                        
                          
                        {/* </Card.ImgOverlay> */}
                      </Card>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              <Carousel.Item>
              <div className='carousel-div caroheight' >
                <img className="caroimg" src="./img/jakpaim.png" alt="...">

                </img>
                  <Carousel.Caption className='caption'>
                    <br/>
                    <br/>
                    <Card className="bg-transparent border-transparent text-white cardcon" style={{padding: "0", borderColor: "#ffffff00"}}>
                      
                      
                    {/* <Card.Img src="./img/jakpaim.png" alt="Home"  style={{ height: "100%", objectFit: "cover"}}/>
                        <Card.ImgOverlay className="overlay-container d-flex flex-column align-items-center justify-content-center" > */}
              
            
                        <Card.Title className= "text-center  marg" >
                        {" "}
                        
                        
                        <a style={{textDecoration: "none", color: "#00FF38"}} href="https://jakpawithaplan.com/"><h2> Jakpa With A Plan </h2></a>
                      </Card.Title>
                      <Card.Text className="home-card-text ">
                    <br />
                    <p style={{ fontSize: "20px" }}> Moving To Greener Pastures Is Not
                    An Escape From Your Current Situation,  
                    But Rather A Step Towards Your Desired Destination

                    </p>


                    </Card.Text>
                    <br/>
                      
                    <div className="button-wrapa" >
                      <div className="button-wrapa-one" >
                    <Link to="/our_work" className="brand">
                      <Button
                        className="px-5 py-1 home-button"
                        style={{
                        backgroundColor: "#757F77",
                        color: "#ffffff",
                        borderRadius: " 50px",
                        border: " 2px solid #ffffff",
                        fontWeight: "600",
                        }}
                      >
                        {" "}
                        View Our Work{" "}
                      </Button>
                      </Link>
                      </div>
                      <div>
                      <Link to="/Contact" className="brand">
                      <Button
                        className="px-5 py-1 home-button"
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
                      </div>
                      
                      {/* </Card.ImgOverlay> */}
                      </Card>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className='carousel-div caroheight' >
                <img className="caroimg" src="./img/doyentalent.png" alt="...">

                </img>
                  <Carousel.Caption className='caption'>
                    <br/>
                    <br/>
                    <Card className="bg-transparent border-transparent text-white cardcon" style={{padding: "0", borderColor: "#ffffff00"}}>
                      
                    {/* <Card.Img  src="./img/doyentalent.png" alt="Home"  style={{ height: "100%", objectFit: "cover"}}/>
                        <Card.ImgOverlay  className=" overlay-container d-flex flex-column align-items-center justify-content-center">
               */}
                      <Card.Title className="text-center 2 marg"  >
                      {" "}
                      
                      
                      <h2> Doyen Talent</h2>
                    </Card.Title>
                    <Card.Text className="home-card-text 2">
                  <br />
                  <p  style={{ fontSize: "20px" }}> Employees are the heart and soul of any organizations. Treat them well 
                  nurture their growth, and watch your business thrieve.

                  </p>


                  </Card.Text>
                  <br/>
                  <div  className="button-wrapa" >
                    
                    <div>
                    <Link to="/Contact" className="brand">
                    <Button
                      className="px-5 py-1 home-button"
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
                    </div>
                    
                    {/* </Card.ImgOverlay> */}
                    </Card>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className='carousel-div caroheight' >
                <img className="caroimg" src="./img/doyenhr.png" alt="...">

                </img>
                  <Carousel.Caption className='caption'>
                    <br/>
                    <br/>
                    <Card className="bg-transparent border-transparent text-white cardcon" style={{padding: "0", borderColor: "#ffffff00"}}>
                      
                    {/* <Card.Img src="./img/doyenhr.png" alt="Home"  style={{ height: "100%", objectFit: "cover"}}/>
                        <Card.ImgOverlay className=" overlay-container d-flex flex-column align-items-center justify-content-center"> */}
              
                        <Card.Title className="text-center  marg" >
                        {" "}
                        
                        
                        <h2> DoyenHR </h2>
                      </Card.Title>
                      <Card.Text className="home-card-text " >
                    <br />
                    <p style={{ fontSize: "20px" }}> Unlock the full potential of your workforce with DoyenHR tailored to your unique needs.
                    Empower your employees, streamline processes and cultivate a culture of success.

                    </p>


                    </Card.Text>
                    <br/>
                    <div className="button-wrapa" >
                      
                      <div>
                      <Link to="/Contact" className="brand">
                      <Button
                        className="px-5 py-1 home-button"
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
                      </div>
                      
                     
                      {/* </Card.ImgOverlay> */}
            
                    </Card>  
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              
              
          </Carousel>
          
          {/* linkree */}
          <div className="linktree-container"> 
          <Link to="https://linktr.ee/doyenify" target="_blank" className= "linktree-wrapa"> 
          <h4 className="linktree-icon"> Linktree < img src= "./img/linktree.png" width="" height= "" alt="linktree" /> </h4>
          </Link>
          </div>
          
      </div>

      
      <div className="eng" style={{backgroundColor: "#D9D7F8"}}>
            <Row >
              <Col className=" col-12 col-sm-6 do-content ms-3 d-flex flex-column align-items-left justify-content-center">
              < img src= "./img/web.png" width="400px" height= "400px" alt="Web" />
              </Col>
              <Col className=" text-wrap mt-5 mx-5 d-flex flex-column align-items justify-content-center do-content"> 
              <h4 style={{fontSize: "36px"}}>RESPONSIVE AND CREATIVE</h4>
              <h2 style={{color: "#387846", fontSize: "36px"}}>Web Design</h2>
                <p style={{fontSize: "20px"}}>We analyze your business to design and create a befitting website 
                  which increases online conversation rate and produces positive results. </p>
              </Col>
            </Row>
          </div>
          <div style={{backgroundColor: "#DFE2E3"}}>
            <Row >
              <Col className=" text-wrap mt-5 mx-5 d-flex flex-column align-items-right justify-content-center do-content">
                <h4 style={{fontSize: "36px"}}> CREATIVE AND SMART</h4>
                <h2 style={{color: "#387846", fontSize: "36px"}}>Graphic Design</h2>
                <p style={{fontSize: "20px"}}> Our Graphics design aims for one thing: positive results. We use a unique approach to 
                  communicate visual art ideas which helps to boost identity and gives classic brand recognition.</p>
              </Col>
              <Col className=" col-12 col-sm-6 do-content d-flex flex-column align-items justify-content-center">
                  < img src="./img/graphic.png" width="400px" height= "400px" style={{margin: "0 auto"}} alt="graphic design" />
              </Col>
            </Row>
          </div>
          <div style={{backgroundColor: "#D9D7F8"}}>
            <Row>
              <Col className=" col-12 col-sm-6 ms-3 do-content d-flex flex-column align-items-left justify-content-center">
              < img src="./img/video.png" width="400px" height= "400px"   alt="Video Editing" />
              </Col>
              <Col className=" text-wrap mt-5 mx-5 d-flex flex-column align-items justify-content-center do-content">
                <h4 style={{fontSize: "36px"}}>GOOD AND NICE</h4>
                <h2 style={{color: "#387846", fontSize: "36px"}}>Video Editing</h2>
                <p style={{fontSize: "20px"}}>Our 5-star Video editing services are highly rated because we blend images, 
                  sound and videos effectively using top notch tools. 
                  This gives our clients optimum satisfaction and a competitive edge.</p>
              </Col>
            </Row>
          </div>
          <div className="ourhome-container">
            <h2 className="text-center mt-5"> Explore Our Products</h2>
             <div className='text-center container  pt-3' >
               <Row >
                <Col className=' img-col col-12 col-md-4'>
                <a  href="" className='ourhome-link'> <div className='img-container'> <img src="./img/imageone.png" alt="" /> </div>
                <div className='text-wrapa'> <h4> Booking App</h4> </div>
                  </a>
                  </Col>
                  <Col className=' img-col col-12 col-md-4'>
                  <a  href="" className='ourhome-link'> <div className='img-container'> <img src="./img/imagetwo.png" alt="" /> </div>
                  <div className='text-wrapa'> <h4> Pay Roll App</h4>  </div>
                  </a>
                  </Col>
                <Col className=' img-col col-12 col-md-4'>
                <a  href="" className='ourhome-link'> <div className='img-container'> <img src="./img/imagethree.png" alt="" /> </div>
                  <div className='text-wrapa'> <h4> Pharmacy App</h4>  </div>
                  </a>
                  </Col>
              </Row>
             </div>
             <div className="text-center mt-5 mb-5 "> 
             <Link to="/Contact" className="qoute-wrapa"> 
             <h4 >Request A Quote <ArrowRightShort className="qoute-arrow"/> </h4>
            </Link>
            </div>
             </div>
    </main>
    <Drift />
  </div>  
  )
};

export default Home;
