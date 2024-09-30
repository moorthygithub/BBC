import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseURLprimg } from "../../api";
import Modal from "./Modal";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import styles from "./Profile.Product.module.css";

const settings = {
  dots: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProfileProduct = ({ productimages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedImg, setClickedImg] = useState(null);
  const [slider, setSlider] = useState(null);

  if (!productimages) {
    return <div>Loading...</div>; 
  }

  const handleClick = (image, index) => {
    setCurrentIndex(index);
    setClickedImg(image);
  };

  const handleRotationRight = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  const handleRotationLeft = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  return (
    <div className="wpo-project-area section-padding" id="portfolio">
      <div className="container">
        <div className="wpo-section-title-s2">
          <div className="row align-items-center">
            <div className="col-lg-4 col-12">
              <div className="title">
                <h2>Recent Work.</h2>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-2">
              <div className="sec-title-icon">
                <i className="fi flaticon-self-growth"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="wpo-project-wrap wpo-project-slide">
          <Slider {...settings} ref={(c) => setSlider(c)}>
            {Object.keys(productimages)
              .filter((key) => key.startsWith("product_image"))
              .map((key, index) => (
                <div className="wpo-project-item" key={index}>
                  <div className="wpo-project-img">
                    <img
                      src={baseURLprimg + productimages[key]}
                      onClick={() => handleClick(productimages[key], index)}
                      style={{ cursor: "pointer" }}
                      alt=""
                    />
                  </div>
                </div>
              ))}
          </Slider>
          <div className={styles["slider-navigation"]}>
            <button
              className={styles["prev-arrow"]}
              onClick={handleRotationLeft}
            >
              <ArrowBack />
            </button>
            <button
              className={styles["next-arrow"]}
              onClick={handleRotationRight}
            >
              <ArrowForward />
            </button>
          </div>
        </div>
      </div>

      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handleRotationRight={handleRotationRight}
          setClickedImg={setClickedImg}
          handleRotationLeft={handleRotationLeft}
        />
      )}
    </div>
  );
};

export default ProfileProduct;
