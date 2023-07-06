import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { LiveChatLoaderProvider } from 'react-live-chat-loader'
import Home from "./pages/Homepage";
import OurWork from "./pages/OurWork";
import AboutUs from "./pages/AboutUs";
import WhatWeDo from "./pages/WhatWeDo";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";

const navigationData = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/our_work" },
  { label: "About Us", path: "/about_us" },
  { label: "What We Do", path: "/services" },
  { label: "Our Team", path: "/our_Team" },
];

// const HomeView = React.lazy(() => import("./pages/Homepage"));
// const OurWorkView = React.lazy(() => import("./pages/"));
// const AboutUsView = React.lazy(() => import("./pages/AboutUs"));
// const WhatWeDoView = React.lazy(() => import("./pages/WhatWeDo"));
// const ContactView = React.lazy(() => import("./pages/Contact"));
// const OurTeamView = React.lazy(() => import("./pages/OurTeam"));

export const App = () => (
  <>
   
    <LiveChatLoaderProvider providerKey="99kzsmh2r94i" provider="drift">
        /* ... */<Header navigation={navigationData} />
    <Container fluid className="px-0">
      <React.Suspense fallback={<Spinner animation={"border"} />}>
        <Routes>
          {/* <Route path="/" element={<HomeView />} />
          <Route path="/our_work" element={<OurWorkView />} />
          <Route path="/about_us" element={<AboutUsView />} />
          <Route path="/services" element={<WhatWeDoView />} />
          <Route path="/contact" element={<ContactView />} />
           <Route path="our_team" element={<OurTeamView />} /> */}
           <Route path="/" element={<Home />} />
          <Route path="/our_work" element={<OurWork />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/services" element={<WhatWeDo />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="our_team" element={<OurTeam />} />
        </Routes>
      </React.Suspense>
    </Container>
    <Footer />
      </LiveChatLoaderProvider>
  </>
);
