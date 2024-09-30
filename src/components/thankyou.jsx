import React from "react";
// import Footer from "../footer/Footer";
import email from "../../src/images/email.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Thankyou = (props) => {
  const styles = {
    top: {
      marginBottom: "300px",
      paddingTop:"30px"
      
      
    },
  };

  return (
    <>
      <section
        className={`formregister wpo-contact-area section-padding ${props.contactclass}`}
        id="register"
        style={styles.top}
      >
        <div className="wpo-wpo-contact-form-map">
          <div className="container">
            <div style={{display:"flex" ,justifyContent:"center"}}>
              <div className="col-lg-10">
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
                  <h2>Thank you</h2>
                  <p>
                    Thank you your data is successfully submitted, our team will
                    contact you very soon.
                  </p>
                  <div className="row mt-4">
                    <div style={{ textAlign: "center" }}>
                      {/* <Link
                        to="/"
                        className="details theme-btn"
                        style={{
                          width: "200px",
                          backgroundColor: "#A41460",
                          borderRadius: "50px",
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        <Button>Home</Button>
                      </Link> */}
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
                      {/* <Link
                        to="/services"
                        className="details theme-btn"
                        style={{
                          width: "200px",
                          backgroundColor: "#A41460",
                          borderRadius: "50px",
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        Services
                      </Link> */}
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
                        <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div> */}
      </section>
      {/* <Footer /> */}
    </>
  );
};
export default Thankyou;
