import React, { useEffect, useState } from "react";
import { baseURL, baseURLurimg } from "../api";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <i className="fa fa-chevron-left"></i>
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <i className="fa fa-chevron-right"></i>
  </div>
);

const settings = {
  dots: false,
  arrows: true,
  speed: 1000,
  // adaptiveHeight: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const Members = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios({
      url: baseURL + "/getUser",
      method: "GET",
    }).then((res) => {
      setUser(res.data.profile);
    });
  }, []);
  return (
    <div className="wpo-project-area section-padding" id="portfolio">
      <div className="container">
        <div className="">
          <div className="row align-items-center">
            <div className="col-lg-9 col-12">
              <div className="title">
                {/* <h2>Our Members</h2> */}
                <h3 style={{ color: "black" }}>
                  The Trusted Partner You Can Have Faith In, Together we can do
                  amazing things.
                </h3>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-2">
              <div className="sec-title-icon">
                <i className="fi flaticon-self-growth"></i>
              </div>
            </div>
          </div>
        </div>
        <Box
          className="wpo-project-wrap wpo-project-slide"
          sx={{ "& .slick-slide": { height: "300px" } }}
        >
          <Slider {...settings}>
            {user.map((users, pro) => (
              <div
                className="wpo-project-item"
                key={pro}
                style={{
                  width: "100%",
                  display: "inline-block",
                  height: "0",
                }}
              >
                <div className="wpo-project-img">
                  <img
                    className="mob_views"
                    src={
                      users.image === null || users.image === ""
                        ? "http://businessboosters.club/public/images/user_images/no_images.png"
                        : baseURLurimg + users.image
                    }
                    alt=""
                  />
                </div>
                <div className="wpo-blog-text" style={{ paddingTop: "15px" }}>
                  <h2 className="titlenames">{users.name}</h2>
                </div>
              </div>
            ))}
          </Slider>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
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
                border: "0px",
              }}
            >
              {" "}
              <Link to="/services" style={{ color: "white" }}>
                SERVICES
              </Link>
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Members;
