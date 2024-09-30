import React from "react";
import ScrollToTopButton from "./scrool/scroll";
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div
            className="col-xs-12 col-md-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <img
              src="	https://businessboosters.club/static/media/about_us.bca55603f348c7edd1ab.jpg"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p style={{ textAlign: "justify" ,fontSize:"23px" ,fontWeight:"500",lineHeight:1.3}}>
                {props.data ? props.data.paragraph : "loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};
