import React, {useState, useEffect, useRef} from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { ArrowRightShort, ChevronDoubleLeft, ChevronDoubleRight} from 'react-bootstrap-icons';
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
  const [defaults, setDefaults] = useState(true);
  const [academy, setAcademy] = useState(false);
  const [jakpa, setJakpa] = useState(false);
  const [emanagement, setEmanagement] = useState(false);
  const [hrsolution, setHrsolution] = useState(false);


  const [defaults2, setDefaults2] = useState(false);
  const [academy2, setAcademy2] = useState(false);
  const [jakpa2, setJakpa2] = useState(false);
  const [emanagement2, setEmanagement2] = useState(false)
  const [hrsolution2, setHrsolution2] = useState(false);
  

  var count = useRef(0);
  const liststore:any = ["default", "academy", "jakpa", "emanagement", "hrsolution"];
  const len:number = liststore.length;



  useEffect(() => {
    const timeout = setTimeout(() => {
      setDefaults2(true)
    }, 400)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const loop = setInterval(() => {
      
      if (count.current < len){
        count.current++
      }else if (count.current === len){
        count.current = 0
      }

      if (liststore[count.current] === "default"){
        getdefaults2();
        

      }else if (liststore[count.current] === "academy"){
        getacademy2();
      } else if (liststore[count.current] === "jakpa"){
        getjakpa2();
      } else if (liststore[count.current] === "emanagement"){
        getemanagement2();
      } else if (liststore[count.current] === "hrsolution"){
        gethrsolution2();
      }
    }, 9000)

    return () => clearInterval(loop)
  }, [])

  const getdefaults = () => {
    count.current = 0;
    setDefaults(true);
    setAcademy(false);
    setJakpa(false);
    setEmanagement(false);
    setHrsolution(false);

    setAcademy2(false);
    setJakpa2(false);
    setEmanagement2(false);
    setHrsolution2(false);

    const timeout = setTimeout(() => {
      setDefaults2(true)
    }, 400)

    return () => clearTimeout(timeout)

  }

  const getacademy = () => {
    count.current = 1;
    setDefaults(false);
    setAcademy(true);
    setJakpa(false);
    setEmanagement(false);
    setHrsolution(false);


    
    setDefaults2(false)
    setJakpa2(false);
    setEmanagement2(false);
    setHrsolution2(false);

    const timeout = setTimeout(() => {
      setAcademy2(true)
    }, 400)

    return () => clearTimeout(timeout)
    


  }

  const getjakpa = () => {
    count.current = 2;
    setDefaults(false);
    setAcademy(false);
    setJakpa(true);
    setEmanagement(false);
    setHrsolution(false);

    setDefaults2(false);
    setEmanagement2(false);
    setHrsolution2(false);
    setAcademy2(false);

    

    const timeout = setTimeout(() => {
      setJakpa2(true)
    }, 400)

    return () => clearTimeout(timeout)
    
  }

  const getemanagement = () => {
    count.current = 3;
    setDefaults(false);
    setAcademy(false);
    setJakpa(false);
    setEmanagement(true);
    setHrsolution(false);

    setDefaults2(false);
    setAcademy2(false);
    setHrsolution2(false);
    setJakpa2(false);

    const timeout = setTimeout(() => {
      setEmanagement2(true)
    }, 400)

    return () => clearTimeout(timeout)

  }

  const gethrsolution = () => {
    count.current = 4
    setDefaults(false);
    setAcademy(false);
    setJakpa(false);
    setEmanagement(false);
    setHrsolution(true);

    setDefaults2(false);
    setAcademy2(false);
    setJakpa2(false);
    setEmanagement2(false);
    const timeout = setTimeout(() => {
      setHrsolution2(true)
    }, 400)

    return () => clearTimeout(timeout)

  }

  //for the animation 

  const getdefaults2 = () => {
    
    setDefaults(true);
    setAcademy(false);
    setJakpa(false);
    setEmanagement(false);
    setHrsolution(false);

    setAcademy2(false);
    setJakpa2(false);
    setEmanagement2(false);
    setHrsolution2(false);

    const timeout = setTimeout(() => {
      setDefaults2(true)
    }, 400)

    return () => clearTimeout(timeout)

  }

  const getacademy2 = () => {
    
    setDefaults(false);
    setAcademy(true);
    setJakpa(false);
    setEmanagement(false);
    setHrsolution(false);


    
    setDefaults2(false)
    setJakpa2(false);
    setEmanagement2(false);
    setHrsolution2(false);

    const timeout = setTimeout(() => {
      setAcademy2(true)
    }, 400)

    return () => clearTimeout(timeout)
    


  }

  const getjakpa2 = () => {
    setDefaults(false);
    setAcademy(false);
    setJakpa(true);
    setEmanagement(false);
    setHrsolution(false);

    setDefaults2(false);
    setEmanagement2(false);
    setHrsolution2(false);
    setAcademy2(false);

    

    const timeout = setTimeout(() => {
      setJakpa2(true)
    }, 400)

    return () => clearTimeout(timeout)
    
  }

  const getemanagement2 = () => {
    setDefaults(false);
    setAcademy(false);
    setJakpa(false);
    setEmanagement(true);
    setHrsolution(false);

    setDefaults2(false);
    setAcademy2(false);
    setHrsolution2(false);
    setJakpa2(false);

    const timeout = setTimeout(() => {
      setEmanagement2(true)
    }, 400)

    return () => clearTimeout(timeout)

  }

  const gethrsolution2 = () => {
    setDefaults(false);
    setAcademy(false);
    setJakpa(false);
    setEmanagement(false);
    setHrsolution(true);

    setDefaults2(false);
    setAcademy2(false);
    setJakpa2(false);
    setEmanagement2(false);
    const timeout = setTimeout(() => {
      setHrsolution2(true)
    }, 400)

    return () => clearTimeout(timeout)

  }


  return (
    <div>
    <main role="main" className="container-fluid px-0">
      <div className="text-center home-header-wrapper">
        <Card className="bg-dark text-white cardcon">
          <Card.Img src="./img/home.png" alt="Home"  style={{ height: "100%", objectFit: "cover"}}/>
          <Card.ImgOverlay className=" overlay-container d-flex flex-column align-items-center justify-content-center">
            
          
          
          {defaults ? (
            <>
              <div className="row cardcont1">
                <div className="col-2">
                  <div style={{marginTop: "50%"}}>

                    
                        <ChevronDoubleLeft onClick={gethrsolution} style={{fontSize: "25px", fontWeight: "510", width: "40px", height: "40px", backgroundColor: "#B0FFC1", borderRadius: "100px", padding: "9px"}} />
                    
                  </div>
                </div>
                <div className="col-8">
                  <div  className={defaults2 ? 'fade-in' : 'fade-out'}>
                      <Card.Title className="text-center" style={{ color: "#00FF38" }}>
                      {" "}
                      
                      
                      <h2> Welcome to Doyenify Technologies </h2>
                    </Card.Title>
                    <Card.Text className="home-card-text">
                  <br />
                  <p style={{ fontSize: "20px" }} > You are ready to join our global network of happy and excited clients.
                  We help Individuals and organizations solve problems with bespoke IT solutions 
                  by providing the most efficient technological solutions to improve business profitability.

                  </p>


                  </Card.Text>
                  <br/>
                  <div className="button-wrapa">
                    <div className="button-wrapa-one" >
                  <Link to="/our_work" className="brand">
                    <Button
                      className="mt-1 px-5 py-1 home-button"
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
                      className="mt-1 px-5 py-1 home-button"
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
                    {/* linkree */}
                    <div className="linktree-container"> 
                    <Link to="https://linktr.ee/doyenify" target="_blank" className= "linktree-wrapa"> 
                    <h4 className="linktree-icon"> Linktree < img src= "./img/linktree.png" width="" height= "" alt="linktree" /> </h4>
                    </Link>
                    </div>
                  </div>
               
            
                </div>
                <div className="col-2">
                  <div style={{marginTop: "50%"}}>
                    <ChevronDoubleRight onClick={getacademy} style={{fontSize: "25px", fontWeight: "510", width: "40px", height: "40px", backgroundColor: "#B0FFC1", borderRadius: "100px", padding: "9px"}} />
                    
                  </div>
                </div>
              </div>
              
              <br/>
              <div >
                <span style={{padding: "10px", borderRadius: "40px", backgroundColor: "#00FF38", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px",padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                
          </div>
            </>
          ):(
            <></>
          )

          }


          {/* Doyenify Academy */}

          {academy ? (
            <>
              <div className="row cardcont1">
                <div className="col-2">
                  <div style={{marginTop: "50%"}}>

                    
                        <ChevronDoubleLeft onClick={getdefaults} style={{fontSize: "25px", fontWeight: "510", width: "40px", height: "40px", backgroundColor: "#B0FFC1", borderRadius: "100px", padding: "9px"}} />
                    
                  </div>
                </div>
                <div className="col-8">
                  <div  className={academy2 ? 'fade-in' : 'fade-out'}>
                        <Card.Title className="text-center" style={{ color: "#00FF38" }}>
                        {" "}
                        
                        
                        <h2> Doyenify Academy </h2>
                      </Card.Title>
                      <Card.Text className="home-card-text">
                    <br />
                    <p style={{ fontSize: "20px" }}> You are ready to join our global network of happy and excited clients.
                    We help Individuals and organizations solve problems with bespoke IT solutions 
                    by providing the most efficient technological solutions to improve business profitability.

                    </p>


                    </Card.Text>
                    <br/>
                    <div className="button-wrapa">
                      <div className="button-wrapa-one" >
                    <Link to="/our_work" className="brand">
                      <Button
                        className="mt-1 px-5 py-1 home-button"
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
                        className="mt-1 px-5 py-1 home-button"
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
                      {/* linkree */}
                      <div className="linktree-container"> 
                      <Link to="https://linktr.ee/doyenify" target="_blank" className= "linktree-wrapa"> 
                      <h4 className="linktree-icon"> Linktree < img src= "./img/linktree.png" width="" height= "" alt="linktree" /> </h4>
                      </Link>
                      </div>
                   </div> 
                
            
                </div>
                <div className="col-2">
                  <div style={{marginTop: "50%"}}>
                    <ChevronDoubleRight onClick={getjakpa} style={{fontSize: "25px", fontWeight: "510", width: "40px", height: "40px", backgroundColor: "#B0FFC1", borderRadius: "100px", padding: "9px"}} />
                    
                  </div>
                </div>
              </div>
              
              <br/>
              <div >
                <span style={{padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#00FF38", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px",padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                
          </div>
            </>
          ):(
            <></>
          )

          }

          {/* jakpa */}
          {jakpa ? (
            <>
              <div className="row cardcont1">
                <div className="col-2">
                  <div style={{marginTop: "50%"}}>

                    
                        <ChevronDoubleLeft onClick={getacademy} style={{fontSize: "25px", fontWeight: "510", width: "40px", height: "40px", backgroundColor: "#B0FFC1", borderRadius: "100px", padding: "9px"}} />
                    
                  </div>
                </div>
                <div className="col-8">
                  <div className={jakpa2 ? 'fade-in' : 'fade-out'}>
                      <Card.Title className="text-center" style={{ color: "#00FF38" }}>
                      {" "}
                      
                      
                      <h2> Jakpa With A Plan </h2>
                    </Card.Title>
                    <Card.Text className="home-card-text">
                  <br />
                  <p style={{ fontSize: "20px" }}> You are ready to join our global network of happy and excited clients.
                  We help Individuals and organizations solve problems with bespoke IT solutions 
                  by providing the most efficient technological solutions to improve business profitability.

                  </p>


                  </Card.Text>
                  <br/>
                  <div className="button-wrapa">
                    <div className="button-wrapa-one" >
                  <Link to="/our_work" className="brand">
                    <Button
                      className="mt-1 px-5 py-1 home-button"
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
                      className="mt-1 px-5 py-1 home-button"
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
                    {/* linkree */}
                    <div className="linktree-container"> 
                    <Link to="https://linktr.ee/doyenify" target="_blank" className= "linktree-wrapa"> 
                    <h4 className="linktree-icon"> Linktree < img src= "./img/linktree.png" width="" height= "" alt="linktree" /> </h4>
                    </Link>
                    </div>
            
                  </div>
                
                </div>
                <div className="col-2">
                  <div style={{marginTop: "50%"}}>
                    <ChevronDoubleRight onClick={getemanagement} style={{fontSize: "25px", fontWeight: "510", width: "40px", height: "40px", backgroundColor: "#B0FFC1", borderRadius: "100px", padding: "9px"}} />
                    
                  </div>
                </div>
              </div>
              
              <br/>
              <div >
                <span style={{padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px",padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#00FF38", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                
          </div>
            </>
          ):(
            <></>
          )

          }
          

          {/* emanagement */}
          {emanagement ? (
            <>
              <div className="row cardcont1">
                <div className="col-2">
                  <div style={{marginTop: "50%"}}>

                    
                        <ChevronDoubleLeft onClick={getjakpa} style={{fontSize: "25px", fontWeight: "510", width: "40px", height: "40px", backgroundColor: "#B0FFC1", borderRadius: "100px", padding: "9px"}} />
                    
                  </div>
                </div>
                <div className="col-8">
                  <div className={emanagement2 ? 'fade-in' : 'fade-out'}>
                    <Card.Title className="text-center" style={{ color: "#00FF38" }}>
                    {" "}
                    
                    
                    <h2> Employee Management </h2>
                  </Card.Title>
                  <Card.Text className="home-card-text">
                <br />
                <p style={{ fontSize: "20px" }}> You are ready to join our global network of happy and excited clients.
                We help Individuals and organizations solve problems with bespoke IT solutions 
                by providing the most efficient technological solutions to improve business profitability.

                </p>


                </Card.Text>
                <br/>
                <div className="button-wrapa">
                  <div className="button-wrapa-one" >
                <Link to="/our_work" className="brand">
                  <Button
                    className="mt-1 px-5 py-1 home-button"
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
                    className="mt-1 px-5 py-1 home-button"
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
                  {/* linkree */}
                  <div className="linktree-container"> 
                  <Link to="https://linktr.ee/doyenify" target="_blank" className= "linktree-wrapa"> 
                  <h4 className="linktree-icon"> Linktree < img src= "./img/linktree.png" width="" height= "" alt="linktree" /> </h4>
                  </Link>
                  </div>
            
                  </div>
                
                </div>
                <div className="col-2">
                  <div style={{marginTop: "50%"}}>
                    <ChevronDoubleRight onClick= {gethrsolution} style={{fontSize: "25px", fontWeight: "510", width: "40px", height: "40px", backgroundColor: "#B0FFC1", borderRadius: "100px", padding: "9px"}} />
                    
                  </div>
                </div>
              </div>
              
              <br/>
              <div >
                <span style={{padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px",padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#00FF38", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                
          </div>
            </>
          ):(
            <></>
          )

          }
          

          {/* hrsolution */}
          {hrsolution ? (
            <>
              <div className="row  cardcont1">
                <div className="col-2">
                  <div style={{marginTop: "50%"}}>

                    
                        <ChevronDoubleLeft onClick={getemanagement} style={{fontSize: "25px", fontWeight: "510", width: "40px", height: "40px", backgroundColor: "#B0FFC1", borderRadius: "100px", padding: "9px"}} />
                    
                  </div>
                </div>
                <div className="col-8">
                  <div className={hrsolution2 ? 'fade-in' : 'fade-out'}>
                      <Card.Title className="text-center" style={{ color: "#00FF38" }}>
                      {" "}
                      
                      
                      <h2> Doyenify HR Solution </h2>
                    </Card.Title>
                    <Card.Text className="home-card-text">
                  <br />
                  <p style={{ fontSize: "20px" }}> You are ready to join our global network of happy and excited clients.
                  We help Individuals and organizations solve problems with bespoke IT solutions 
                  by providing the most efficient technological solutions to improve business profitability.

                  </p>


                  </Card.Text>
                  <br/>
                  <div className="button-wrapa">
                    
                    <div>
                    <Link to="/Contact" className="brand">
                    <Button
                      className="mt-1 px-5 py-1 home-button"
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
                    {/* linkree */}
                    <div className="linktree-container"> 
                    <Link to="https://linktr.ee/doyenify" target="_blank" className= "linktree-wrapa"> 
                    <h4 className="linktree-icon"> Linktree < img src= "./img/linktree.png" width="" height= "" alt="linktree" /> </h4>
                    </Link>
                    </div>
            
                  </div>
                
                </div>
                <div className="col-2">
                  <div style={{marginTop: "50%"}}>
                    <ChevronDoubleRight onClick={getdefaults} style={{fontSize: "25px", fontWeight: "510", width: "40px", height: "40px", backgroundColor: "#B0FFC1", borderRadius: "100px", padding: "9px"}} />
                    
                  </div>
                </div>
              </div>
              
              <br/>
              <div >
                <span style={{ padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px",padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#D9D9D9", width: "10px", height: "10px", display: "inline-block"}}></span>
                <span style={{marginLeft: "9px", padding: "10px", borderRadius: "40px", backgroundColor: "#00FF38", width: "10px", height: "10px", display: "inline-block"}}></span>
                
          </div>
            </>
          ):(
            <></>
          )

          }
          

          </Card.ImgOverlay>
          
        </Card>
      </div>
      <div style={{backgroundColor: "#D9D7F8"}}>
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
  </div>  
  )
};

export default Home;
