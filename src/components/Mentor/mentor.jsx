import React from "react";
import { TabContent, TabPane } from "reactstrap";
import mentors from "./mentorapi";

const Mentor = (props) => {
  return (
    <div
      className={`wpo-service-area section-padding mentor ${props.sClass}`}
      id="blog"
      style={{ paddingBottom: "20px" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12" style={{ padding: "60px" }}>
            <div className="wpo-section-title">
              <h2 className="text-center">Our Directors</h2>
            </div>
          </div>
        </div>
        <div className="wpo-service-wrap">
          <TabContent activeTab="1">
            <TabPane tabId="1">
              <div
                className="row justify-content-center align-items-center"
                style={{ padding: "10px" }}
              >
                {" "}
                {mentors.slice(0, 3).map((service, srv) => (
                  <div className="col-lg-4 col-md-6 col-12" key={srv}>
                    <div
                      className="wpo-service-item"
                      style={{
                        backgroundColor: "rgb(164, 20, 96)",
                        padding: "20px",
                        borderRadius: "8px",
                        color: "#1e1e1e",
                        marginBottom: "10px",
                      }}
                    >
                      {" "}
                      <div className="icon" style={{ margin: "0 auto 30px" }}>
                        <img
                          src={service.screens}
                          alt=""
                          style={{
                            width: "100%",
                            maxWidth: "150px",
                            height: "auto",
                            margin: "0 auto",
                            display: "block",

                          }}
                        />{" "}
                      </div>
                      <h2 className="text-center" style={{ fontSize: "24px" ,color:"white" }}>
                        {service.title}
                      </h2>{" "}
                      {/* <p className="text-center">{service.category}</p>{" "} */}
                    </div>
                  </div>
                ))}
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
      {/* <div className="ab-shape">
                <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                    <g opacity="0.3" filter="url(#filter0_f_39_4268)">
                        <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4268" x="-500" y="0" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267" />
                        </filter>
                    </defs>
                </svg>
            </div> */}
    </div>
  );
};

export default Mentor;
