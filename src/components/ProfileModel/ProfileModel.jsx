import React, { useEffect, useState, Fragment } from "react";
import { Dialog, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import { baseURL, baseURLurimg } from "../../api";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./ProfileModel.module.css";

const DialogTitle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",

  right: theme?.spacing(1) || "8px",
  top: theme?.spacing(1) || "8px",
  color: theme?.palette?.grey?.[500] || "#9e9e9e",
}));

const ScrollContainer = styled("div")(({ theme }) => ({
  overflowY: "auto",
  maxHeight: "calc(100vh - 64px)",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

const ProfileImage = styled("img")(({ theme }) => ({
  width: "200px",
  borderRadius: "8px",
  height: "300px",
  display: "block",
  [theme.breakpoints.down("sm")]: {
    height: "150px",
    display: "none",
  },
  [theme.breakpoints.down("xs")]: {
    height: "120px",
    display: "block",
  },
}));

const ProfileModel = ({ open, onClose, id }) => {
  const [useres, setUseres] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${baseURL}/getUserById/${id}`);
        if (isMounted) {
          setUseres(res.data.profiles);
          setProduct(res.data.profiles.product);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth="lg"
        sx={{ maxWidth: "100%" }}
      >
        <DialogTitle>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "2rem" } }}
          >
            {useres.name}
          </Typography>
          <CloseButton onClick={onClose} sx={{ backgroundColor: "#ededed" }}>
            <CloseIcon sx={{ height: "25px", width: "25px" }} />
          </CloseButton>
        </DialogTitle>

        <ScrollContainer>
          <div className="wpo-service-single-wrap">
            <div
              className="wpo-service-single-item"
              style={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <div style={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  className="model_companyname"
                  sx={{
                    padding: "10px",
                    fontFamily: "serif",

                    fontWeight: "600",
                    fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
                  }}
                >
                  {useres.company}
                </Typography>
                <Typography
                  variant="body1"
                  className="model_address"
                  sx={{
                    padding: "10px",
                    fontSize: { xs: "1.4rem", sm: "1.6rem" },
                  }}
                >
                  {useres.address}
                </Typography>

                <Typography
                  variant="h6"
                  className="model_category"
                  sx={{
                    padding: "10px",
                    fontFamily: "serif",
                    fontWeight: "600",
                    fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
                  }}
                >
                  Occupation
                </Typography>
                <Typography
                  className="model_catg_lists"
                  sx={{
                    padding: "10px",
                    fontSize: { xs: "1.4rem", sm: "1.6rem" },
                  }}
                >
                  {useres.occupation}
                </Typography>
              </div>

              <ProfileImage src={`${baseURLurimg}${useres.image}`} alt="" />
            </div>
            <Typography
              variant="h6"
              className="model_category"
              sx={{
                padding: "10px",
                fontFamily: "serif",
                fontWeight: "600",
                fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
              }}
            >
              Product & Services
            </Typography>
            <div className={styles.productServicesGrid}>
              <ul style={{ listStyle: "none", paddingRight: "16px" }}>
                {String(product)
                  .split(",")
                  .map(
                    (str, index) =>
                      index % 2 === 0 && (
                        <li
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontFamily: "serif",
                            fontWeight: "600",
                            padding: "4px",
                            fontSize: { xs: "1.6rem", sm: "1.8rem" },
                          }}
                        >
                          <CheckCircleIcon
                            fontSize="medium"
                            style={{ color: "#4caf50", marginRight: "8px" }}
                          />
                          {str}
                        </li>
                      )
                  )}
              </ul>

              <ul style={{ listStyle: "none" }}>
                {String(product)
                  .split(",")
                  .map(
                    (str, index) =>
                      index % 2 !== 0 && (
                        <li
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontFamily: "serif",
                            fontWeight: "600",
                            padding: "4px",
                            fontSize: { xs: "1.6rem", sm: "1.8rem" },
                          }}
                        >
                          <CheckCircleIcon
                            fontSize="medium"
                            style={{ color: "#4caf50", marginRight: "8px" }}
                          />
                          {str}
                        </li>
                      )
                  )}
              </ul>
            </div>

            <div className="wpo-service-single-item">
              <Typography
                variant="h6"
                className="model_contact"
                sx={{
                  fontFamily: "serif",
                  fontWeight: "600",
                  fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
                }}
              >
                Contact Us
              </Typography>

              <div
                className="wpo-service-area"
                style={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="info-item"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    marginBottom: { xs: "10px", sm: "0" },
                  }}
                >
                  <div
                    className="info-wrap"
                    style={{
                      color: "#888888",
                      backgroundColor: "#e2e2e2",
                      padding: "10px",
                      borderRadius: "10px",
                      marginRight: "5px",
                    }}
                  >
                    <a href={`tel:${useres.mobile}`} className="info-icon">
                      <i
                        className="fa fa-phone callicon"
                        style={{ color: "#dfca08" }}
                      ></i>
                    </a>
                    <Typography sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                      <a
                        href={`tel:${useres.mobile}`}
                        style={{ color: "black" }}
                      >
                        {useres.mobile}
                      </a>
                    </Typography>
                  </div>
                </div>
                <div
                  className="info-item"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: "#888888",
                    backgroundColor: "#e2e2e2",
                    padding: "10px",
                    borderRadius: "10px",
                    marginRight: "5px",
                    marginBottom: { xs: "10px", sm: "0" },
                  }}
                >
                  <div className="info-wrap">
                    <a href={`mailto:${useres.email}`} className="info-icon">
                      <i
                        className="fa fa-envelope mailicon"
                        style={{ color: "#dfca08" }}
                      ></i>
                    </a>
                    <Typography sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                      <a
                        href={`mailto:${useres.email}`}
                        style={{ color: "black" }}
                      >
                        {useres.email}
                      </a>
                    </Typography>
                  </div>
                </div>
                <div
                  className="info-item"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: "#888888",
                    backgroundColor: "#e2e2e2",
                    padding: "10px",
                    borderRadius: "10px",
                    marginRight: "5px",
                    marginBottom: { xs: "10px", sm: "0" },
                  }}
                >
                  <div className="info-wrap">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${useres.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-icon"
                    >
                      <i
                        className="fa fa-map-marker mapicon"
                        style={{ color: "#dfca08" }}
                      ></i>
                    </a>
                    <Typography sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                      <a
                        href={`https://wa.me/+91${useres.mobile}`}
                        style={{
                          color: "black",
                          backgroundColor: "#e2e2e2",
                          padding: "8px",
                          borderRadius: "10px",
                        }}
                      >
                        {useres.mobile}
                      </a>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollContainer>
      </Dialog>
    </Fragment>
  );
};

export default ProfileModel;
