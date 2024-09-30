import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { AboutService } from "./components/aboutservice/aboutservice";
import Service from "./components/Service/services";
import Profile from "./components/Profile/Profile";
import { Contact } from "./components/contact/contact";
import JsonData from "./data/data.json";
import "./App.css";
import Member from "./components/member";
import Register from "./components/RegisterForm/RegisterForm";
import Gallery from "../src/components/Gallery/Gallery";
import Mentor from "./components/Mentor/mentor";
import Fotter from "./components/fotter";
import Floating from "./components/Floating/floating";
import Interest from "./components/Interest/Interest";
import Thankyou from "./components/thankyou";
import Failure from "./components/failure";
import ScrollToTopButton from "./components/scrool/scroll";
import ScrollToTop from "./components/scrool/ScrooltoTopRoute";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <ScrollToTop />

        {/* Main content wrapper */}
        <div className="content-wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header data={landingPageData.Header} />
                  <Features />
                  <ScrollToTopButton />
                  <About data={landingPageData.About} />
                  <Member />
                  <AboutService data={landingPageData.Services} />
                  <Floating />
                  {/* <Contact data={landingPageData.Contact} /> */}
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About data={landingPageData.About} />
                  <Mentor />
                </>
              }
            />
            <Route path="/:id" element={<Profile />} />
            <Route
              path="/services"
              element={<Service data={landingPageData.Services} />}
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/member" element={<Member />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/contact"
              element={<Contact data={landingPageData.Contact} />}
            />
            <Route path="interest" element={<Interest />} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/failure" element={<Failure />} />
          </Routes>
        </div>

        <footer>
          <Fotter />
        </footer>
      </div>
    </Router>
  );
};

export default App;
