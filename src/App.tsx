import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import Header from "./Header";
import { LiveChatLoaderProvider } from 'react-live-chat-loader'
import { Audio } from 'react-loader-spinner'
import Termandconditions from "./pages/Termandconditions";


const navigationData = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/our_work" },
  { label: "About Us", path: "/about_us" },
  { label: "What We Do", path: "/services" },
  { label: "Our Team", path: "/our_Team" },
];

const HomeView = React.lazy(() => import("./pages/Homepage"));
const OurWorkView = React.lazy(() => import("./pages/OurWork"));
const AboutUsView = React.lazy(() => import("./pages/AboutUs"));
const WhatWeDoView = React.lazy(() => import("./pages/WhatWeDo"));
const ContactView = React.lazy(() => import("./pages/Contact"));
const OurTeamView = React.lazy(() => import("./pages/OurTeam"));
const TeamandCondition = React.lazy(() => import("./pages/Termandconditions"));
const Privatepolicy = React.lazy(() => import("./pages/PrivatePolicy"));

export const App = () => {


  const [ready, setReady] = useState(false);
  
  useEffect(() => {
      spins();
  }, []);

  
  const spins = async() => {
    await new Promise(r => setTimeout(r, 100));
    setReady(true)
  }
  

  return (
    <div style={{overflowX: "hidden"}}>
      {
            ready ? (<>
              <LiveChatLoaderProvider providerKey="99kzsmh2r94i" provider="drift">
                  <Header navigation={navigationData} />
              <Container fluid className="px-0">
                {/* <React.Suspense fallback={<Spinner animation={"border"} />}> */}
                <React.Suspense>
                  <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/our_work" element={<OurWorkView />} />
                    <Route path="/about_us" element={<AboutUsView />} />
                    <Route path="/services" element={<WhatWeDoView />} />
                    <Route path="/contact" element={<ContactView />} />
                    <Route path="our_team" element={<OurTeamView />} />
                    <Route path="termandconditions" element={<Termandconditions />} />
                    <Route path="Privatepolicy" element={<Privatepolicy />} />
                  </Routes>
                </React.Suspense>
              </Container>
              {/* <Footer /> */}
            </LiveChatLoaderProvider>
            </>):
            (<>
              <div>
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
   
    
  </div>
  )
  
};
