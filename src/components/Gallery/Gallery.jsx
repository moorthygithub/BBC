import React, { useEffect, useState } from "react";
import { baseURL, baseURLgalimg } from "../../api";
import axios from "axios";
import Modal from "./Model";
import "./Gallery.css";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";
import ScrollToTopButton from "../scrool/scroll";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios({
      url: baseURL + "/getGallery",
      method: "GET",
    })
      .then((res) => {
        if (res.data && res.data.gallery) {
          console.log(res.data.gallery);
          setGallery(res.data.gallery);
        } else {
          console.error("Gallery data is not in expected format");
        }
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching gallery data:", error);
        setLoader(false);
      });
  }, []);

  const handleClick = (image, index) => {
    setCurrentIndex(index);
    setClickedImg(image);
  };

  const handleRotationRight = () => {
    const totalLength = gallery.length;
    if (currentIndex === null || totalLength === 0) return;
    const newIndex = (currentIndex + 1) % totalLength;
    setCurrentIndex(newIndex);
    setClickedImg(gallery[newIndex].large_image);
  };

  const handleRotationLeft = () => {
    const totalLength = gallery.length;
    if (currentIndex === null || totalLength === 0) return;
    const newIndex = (currentIndex - 1 + totalLength) % totalLength;
    setCurrentIndex(newIndex);
    setClickedImg(gallery[newIndex].large_image);
  };

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-header">
          <h1>GALLERY</h1>
          <h5>
            A mentor is an individual with expertise who can help develop the
            career of a mentee. Meet our Mentors.
          </h5>
        </div>
      </div>

      {loader ? (
        <Box
          sx={{
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
          }}
        >
          <LinearProgress color="success" />
        </Box>
      ) : (
        <div
          className="gallery-grid"
          style={{
            paddingBottom: "0px",
            backgroundColor: "#f8f8f8",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "300px",
            marginRight: "30px",
            marginLeft: "30px",
          }}
        >
          {gallery.length > 0 ? (
            gallery.map((item, index) =>
              item.small_image ? (
                <div
                  key={item.id || item.small_image}
                  style={{ width: "100%", height: "auto" }}
                >
                  <img
                    src={baseURLgalimg + item.small_image}
                    alt={item.small_image}
                    onClick={() => handleClick(item.large_image, index)}
                    style={{ cursor: "pointer", width: "100%", height: "auto" }}
                  />
                </div>
              ) : null
            )
          ) : (
            <p>No images available.</p>
          )}
        </div>
      )}
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handelRotationRight={handleRotationRight}
          handelRotationLeft={handleRotationLeft}
          setClickedImg={setClickedImg}
        />
      )}
      <ScrollToTopButton />
    </>
  );
}

export default Gallery;
