import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import bbcBanner from "../images/bbc_banner.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import { baseURL } from "../api";
export const Header = (props) => {
  useEffect(() => {
    axios({
      url: baseURL + "/updateVisitorCount",
      method: "POST",
    }).then((res) => {
      localStorage.setItem("visitorCount", res.data.visitorCount);
    });
  }, []);
  return (
    <header id="header">
      <div
        className="intro"
        style={{
          backgroundImage: `url(${bbcBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="overlay-header">
          <div className="container">
            <div className="row">
              <div
                // col-md-offset-2
                // col-md-10
                className=" intro-text"
                id="header-title"
              >
                <h2 style={{ fontSize: "27px" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                > */}
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon sx={{ color: "white" }} />}
                  sx={{
                    backgroundColor: "rgb(164, 20, 96)",
                    borderRadius: "50px",
                    margin: "10px",
                    height: "50px",
                    fontSize: "20",
                    fontWeight: 700,
                    border:"0px"
                  }}
                >
                  {" "}
                  <Link to="/services" style={{ color: "white" }}>
                    SERVICES
                  </Link>
                </Button>

                {/* </a>{" "} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
