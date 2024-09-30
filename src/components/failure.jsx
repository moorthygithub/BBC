import React from "react";

import email from "../images/email_not_sent.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Failure = (props) => {
  const styles = {
    top: {
      marginBottom: "300px",
    },
  };

  return (
    <>
      <section
        className={`formregister wpo-contact-area section-padding ${props.contactclass}`}
        id="register"
        style={styles.top}
      >
        <div className="wpo-wpo-contact-form-map" >
          <div className="container" id="top">
            <div style={{display:"flex" ,justifyContent:"center"}}>
              <div className="col-lg-10" >
                <div
                  className="wpo-section-title"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={email} alt="Email" style={{ width: "35%" }} />
                  <h2 style={{fontSize:"27px"}}>Failed to submit</h2>
                  <p>
                    You are already registered with us. Please contact Mr.Govind
                    Garg @ 8867171060
                  </p>
                  <div className="row mt-4">
                    <div style={{ textAlign: "center" }}>
                      <Button
                        variant="outlined"
                        sx={{
                          backgroundColor: "#A41460",
                          borderRadius: "50px",
                          width: "110px",
                          margin: "10px",
                          height: "35px",
                        }}
                      >
                        {" "}
                        <Link to="/" style={{ color: "white" }}>
                          Home
                        </Link>
                      </Button>

                      <Button
                        variant="outlined"
                        sx={{
                          backgroundColor: "#A41460",
                          borderRadius: "50px",
                          fontWeight: "600",
                          color: "white",
                          width: "110px",
                          height: "35px",
                        }}
                      >
                        {" "}
                        <Link to="/services" style={{ color: "white" }}>
                          SERVICES
                        </Link>
                      </Button>
                      {"     "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape-wk">
          <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
            <g opacity="0.45" filter="url(#filter0_f_39_4214)">
              <circle cx="750" cy="750" r="200" />
            </g>
            <defs>
              <filter
                id="filter0_f_39_4214"
                x="0"
                y="0"
                width="1500"
                height="1500"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="275"
                  result="effect1_foregroundBlur_39_4212"
                />
              </filter>
            </defs>
          </svg>
        </div> */}
      </section>
    </>
  );
};
export default Failure;
