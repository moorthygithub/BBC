import React from "react";
import handshake from "../../images/whyus/1.png";
import check from "../../images/whyus/2.png";
import purse from "../../images/whyus/3.png";
import logoFacebook from "../../images/followus/facebook.png";
import logoYouTube from "../../images/followus/youtube.png";
import logoPlayStore from "../../images/followus/playstore.png";
import "./aboutservice.css";
import { FaArrowRight } from "react-icons/fa";

export const AboutService = () => {
  const facebook = () => {
    window.open("https://www.facebook.com/businessboosterclub2018/", "_blank");
  };
  const youtube = () => {
    window.open(
      "https://www.youtube.com/@BusinessboostersclubBangalore/",
      "_blank"
    );
  };
  const mobileApp = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.bbc.agsolutions&pcampaignid=web_share",
      "_blank"
    );
  };

  const services = [
    {
      icon: handshake,
      name: "Channal Partner",
      text: "You will get more than 60 saleing partners for your product and services. which will be boosting and take your business to new heights",
    },
    {
      icon: check,
      name: "Trusted and Tested",
      text: "As per our group rules whichever product or services referred to you are server by our trusted members and are the best in quality and price",
    },
    {
      icon: purse,
      name: "Pocket friendly",
      text: "To become a member there is a very small fees charged. The only investment to boost your business is you",
    },
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: "white" }}>Best Consulting For Every Business</h2>
          <p style={{ color: "white" }}>
            This is a group that believes in fair and honest business practices,
            not only to help customers but to develop personal relationships.
            Thus growing in every field. Our members not only enjoy business
            referrals but also develop healthy family bonding with each other.
          </p>
          <p style={{ color: "white" }}>
            We believe in
            <h5 className="highlight" style={{ color: "white" }}>
              “SABKA SATH SABKA VISHWAS”
            </h5>
          </p>
        </div>
        <div className="row">
          {services.map((service, i) => (
            <div
              key={`${service.name}-${i}`}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
            >
              <div className="service-card">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="service-icon"
                />
                <div className="service-desc">
                  <h3 style={{fontSize:"2.5rem"}}>{service.name}</h3>
                  <p style={{textAlign:"justify",fontSize:"1.8rem",fontFamily:"sans-serif",lineHeight:"1.4em",fontWeight:600 }}>{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="social-links-wrap">
          <div className="social-link-item">
            <span className="label">Facebook</span>
            <img
              src={logoFacebook}
              alt="Facebook Logo"
              className="social-icon"
            />
            <a onClick={facebook} className="social-link">
              Click Here
              <FaArrowRight className="arrow-icon" />
            </a>
          </div>
          <div className="social-link-item">
            <span className="label">YouTube</span>
            <div>
              <img
                src={logoYouTube}
                alt="YouTube Logo"
                className="social-icon"
              />
            </div>
            <a onClick={youtube} className="social-link">
              Click Here
              <FaArrowRight className="arrow-icon" />
            </a>
          </div>
        </div>
        <div className="social-link-item" style={{ marginTop: "25px" }}>
          <span className="label">Mobile App</span>
          <img
            src={logoPlayStore}
            alt="Mobile App Logo"
            style={{ maxWidth: "100px" }}
          />
          <a onClick={mobileApp} className="social-link">
            Click Here <FaArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
