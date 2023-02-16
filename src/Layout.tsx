import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Container, Overlay } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Pages/Homepage";
import About_us from "./Pages/About_us";
import Whatwedo from "./Pages/Whatwedo";
import Contact from "./Pages/Contact";
const Layout: React.FC = () => {
  return (
    <Router>
      <Header /> 
      <main>
        <Container fluid className="px-0">
          <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="About_us" element={<About_us/>} /> 
          <Route path="Whatwedo" element={<Whatwedo/>} />
          <Route path="Contact" element={<Contact/>} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
};
export default Layout;
