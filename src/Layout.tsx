import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Pages/Landing";

const Layout: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
          <Route path="/" element={<Landing/>} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
};

export default Layout;
