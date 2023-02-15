import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Container, Overlay } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Pages/Landing";
import About_us from "./Pages/About_us";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import OurTeam from "./Pages/Our_Team";

const Layout: React.FC = () => {
  return (
    <Router>
      <Header /> 
      <main>
        <Container fluid>
          <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="About_us" element={<About_us/>} /> 
          <Route path="Services" element={<Services/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="Our_Team" element={<OurTeam/>} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
};
export default Layout;
