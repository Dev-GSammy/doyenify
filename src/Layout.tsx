import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Container, Overlay } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Pages/Landing";
import About_us from "./Pages/About_us";
import Services from "./Pages/Services";
const Layout: React.FC = () => {
  return (
    <Router>
      <Header /> 
      <main>
        <Container>
          <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="About_us" element={<About_us/>} /> 
          <Route path="Services" element={<Services/>} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
};
export default Layout;
