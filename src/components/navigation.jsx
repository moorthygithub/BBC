import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export const Navigation = () => {
  // const navigate = useNavigate();

  // const handleNavigation = (path) => {
  //   navigate(path);
  // };

  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById(
      "bs-example-navbar-collapse-1"
    );
    if (navbarCollapse.classList.contains("in")) {
      navbarCollapse.classList.remove("in");
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            style={{ marginTop: "0px", marginBottom: "0x", marginRight: "8px" }}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" onClick={handleLinkClick}>
            <Box
              component="img"
              src="https://businessboosters.club/static/media/logo.b092c9f492105e973cc3.png"
              alt="Business Boosters Logo"
              sx={{
                height: { xs: "40px", sm: "50px", md: "65px" },
              }}
            />
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/" className="page-scroll" onClick={handleLinkClick}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="page-scroll"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="page-scroll"
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown">
                MEMBER
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="https://login.businessboosters.club/login"
                    target="_blank"
                    className="page-scroll"
                    onClick={handleLinkClick}
                  >
                    Login
                  </a>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="page-scroll"
                    onClick={handleLinkClick}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/gallery"
                className="page-scroll"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="page-scroll"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
