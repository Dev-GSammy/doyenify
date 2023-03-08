import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const navigationData = [
  { label: "Home", path: "/" },
  { label: "Our Work", path: "/our_work" },
  { label: "About Us", path: "/about_us" },
  { label: "What We Do", path: "/services" },
  { label: "Our Team", path: "/our_Team" },
];

const HomeView = React.lazy(() => import("./Pages/Homepage"));
const OurWorkView = React.lazy(() => import("./Pages/OurWork"));
const AboutUsView = React.lazy(() => import("./Pages/AboutUs"));
const WhatWeDoView = React.lazy(() => import("./Pages/WhatWeDo"));
const ContactView = React.lazy(() => import("./Pages/Contact"));
const OurTeamView = React.lazy(() => import("./Pages/OurTeam"));

export const App = () => (
  <>
    <Header navigation={navigationData} />
    <Container fluid className="px-0">
      <React.Suspense fallback={<Spinner animation={"border"} />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/our_work" element={<OurWorkView />} />
          <Route path="/about_us" element={<AboutUsView />} />
          <Route path="/services" element={<WhatWeDoView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="our_team" element={<OurTeamView />} />
        </Routes>
      </React.Suspense>
    </Container>
    <Footer />
  </>
);
