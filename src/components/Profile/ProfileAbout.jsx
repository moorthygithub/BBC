import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { baseURLimg } from "../../api";

const ProfileAbout = ({
  image,
  name,
  about,
  category,
  experience,
  product,
}) => {
  const experienceNumber = experience.replace(/[^0-9]/g, "");

  return (
    <Box sx={{ py: 4, px: 2, mx: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Left Side Image */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "100%", md: "30%" },
            position: "relative",
          }}
        >
          <Avatar
            src={baseURLimg + image}
            alt={name}
            sx={{ width: "66%", height: "auto", borderRadius: "20px" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "85%",
              left: "75%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "10px",
              width: "200px",
              height: "70px",
              padding: "10px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Typography variant="h5" color="text.primary">
              {name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {category}
            </Typography>
          </Box>
        </Box>

        {/* Right Side Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            maxWidth: { xs: "300px", sm: "100%" },
          }}
        >
          {/* About Section */}
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "600",
              color: "black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="p"
            sx={{
              textAlign: "justify",
              fontSize: {
                xs: "10px",
                sm: "16px",
              },
              lineHeight: "1.8em",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {about}
          </Typography>

          {/* Product & Services Section */}
          <Typography variant="h4" sx={{ mt: 4 }}>
            Product & Services
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              mt: 2,
            }}
          >
            {/* First Column */}
            <Box>
              <List>
                {String(product)
                  .split(",")
                  .map((item, index) =>
                    index % 2 === 0 ? (
                      <ListItem
                        key={index}
                        sx={{
                          paddingBottom: "20px",
                        }}
                      >
                        <ListItemIcon>
                          <Box
                            sx={{
                              backgroundColor: "#a41460",
                              borderRadius: "50%",
                              padding: "4px",
                              color: "white",
                            }}
                          >
                            <ChevronRightIcon />
                          </Box>
                        </ListItemIcon>
                        <Typography
                          variant="p"
                          color="text.primary"
                          sx={{
                            fontSize: "16px",
                            lineHeight: "1.8em",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          {item}
                        </Typography>
                      </ListItem>
                    ) : null
                  )}
              </List>
            </Box>

            {/* Second Column */}
            <Box>
              <List>
                {String(product)
                  .split(",")
                  .map((item, index) =>
                    index % 2 !== 0 ? (
                      <ListItem key={index} sx={{ paddingBottom: "20px" }}>
                        <ListItemIcon>
                          <Box
                            sx={{
                              backgroundColor: "#a41460",
                              borderRadius: "50%",
                              padding: "4px",
                              color: "white",
                            }}
                          >
                            <ChevronRightIcon />
                          </Box>
                        </ListItemIcon>
                        <Typography
                          variant="p"
                          color="text.primary"
                          sx={{
                            fontSize: "16px",
                            lineHeight: "1.8em",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          {item}
                        </Typography>
                      </ListItem>
                    ) : null
                  )}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileAbout;
