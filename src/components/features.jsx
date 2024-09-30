import React from "react";
import { useNavigate } from "react-router-dom";
import service from "../images/whyus/done.png";
import joinus from "../images/whyus/partner.png";
import login from "../images/whyus/savings.png";

export const Features = () => {
  const navigate = useNavigate();

  return (
    <div id="features" className="text-center">
      <div className="features-container">
        <div className="feature-item" onClick={() => navigate("/register")}>
          <img
            src={joinus}
            alt="Join Us"
            className="feature-image"
            style={{ width: "11.5rem" }}
          />
          <h3 className="mt-3" style={{ fontSize: "27px", fontWeight: 700 }}>
            Join us
          </h3>
          <p
            style={{
              fontSize: "2rem",
              fontFamily: "sans-serif",
              fontWeight: 500,
            }}
          >
            We all are here to develop and boost businesses of group members. We
            trust each other and help each other to grow.
          </p>
        </div>

        <div className="feature-item" onClick={() => navigate("/services")}>
          <img
            src={service}
            alt="Service"
            className="feature-image"
            style={{ width: "11.5rem" }}
          />
          <h3 className="mt-3" style={{ fontSize: "27px", fontWeight: 700 }}>
            Find a Service
          </h3>
          <p
            style={{
              fontSize: "2rem",
              fontFamily: "sans-serif",
              fontWeight: 500,
            }}
          >
            Services/Businesses referred to you by our trusted members are of
            the best quality and price.
          </p>
        </div>

        <div className="feature-item" style={{ height: "300px" }}>
          <a
            href="https://login.businessboosters.club/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={login}
              alt="Login"
              className="feature-image"
              style={{ width: "11.5rem" }}
            />
            <h3 className="mt-3" style={{ fontSize: "27px", fontWeight: 700 }}>
              Login
            </h3>
            <p
              style={{
                fontSize: "2rem",
                fontFamily: "sans-serif",
                fontWeight: 500,
              }}
            >
              Already registered? Click here to login and update your details.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
