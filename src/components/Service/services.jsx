import React, { useEffect, useState } from "react";
import { baseURL, baseURLurimg } from "../../api";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LinearProgress from "@mui/material/LinearProgress";
import Autocomplete from "@mui/material/Autocomplete";
import ScrollToTopButton from "../scrool/scroll";

import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ProfileModel from "../ProfileModel/ProfileModel";
const Service = (props) => {
  const [user, setUser] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios({
      url: baseURL + "/getUser",
      method: "GET",
    }).then((res) => {
      setUser(res.data.profile);
      setSuggestion(res.data.profile);
      setLoader(false);
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);

  const handleClickOpen = (item) => {
    setOpen(true);
    setState(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloses = () => {
    setOpens(false);
  };

  const [state, setState] = useState({});

  const onChangeHandle = (e, value) => {
    setSearchTerm(value || "");
  };

  // const filteredUsers = user.filter((u) =>
  //   u.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  console.log(user);

  return (
    <>
      <Box sx={{ paddingBottom: "380px" }}>
        <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
          <Typography variant="h2">Our Awesome Partners</Typography>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Type to Search...."
            value={searchTerm}
            onChange={onChangeHandle}
            fullWidth
            sx={{ maxWidth: 1300 }}
            InputProps={{
              endAdornment: (
                <datalist id="suggestion">
                  {suggestion.map((sug, key) => (
                    <option key={key} value={sug.name}>
                      {sug.name}
                    </option>
                  ))}
                </datalist>
              ),
            }}
          />
        </Box> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "1300px",
            margin: "0 auto",
            marginBottom: "20px",
          }}
        >
          <Autocomplete
            id="user-autocomplete"
            sx={{ width: "100%" }}
            options={user}
            autoHighlight
            getOptionLabel={(option) => option.name}
            onInputChange={(e, value) => onChangeHandle(e, value)}
            filterOptions={(options, { inputValue }) =>
              options.filter((option) =>
                option.name.toLowerCase().includes(inputValue.toLowerCase())
              )
            }
            renderOption={(props, option) => (
              <Box component="li" {...props} key={option.id}>
                {option.name}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Users"
                fullWidth
                InputProps={{
                  ...params.InputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 2,
            width: "100%",
            maxWidth: 1300,
            margin: "0 auto",
          }}
        >
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
              <LinearProgress color="success" />{" "}
            </Box>
          ) : (
            user
              .filter((users) => {
                if (!searchTerm) return users;
                else if (
                  users.profile_mix
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return users;
                }
                return null;
              })
              .map((users, exp) => (
                <Card
                  key={exp}
                  variant="outlined"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", sm: "row" },
                    alignItems: "stretch",
                    marginBottom: 2,
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "25%", sm: "25%" },
                      height: 200,
                      backgroundImage: `url(${
                        users.image === null || users.image === ""
                          ? "http://businessboosters.club/public/images/user_images/no_images.png"
                          : baseURLurimg + users.image
                      })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />

                  <CardContent
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: { xs: "10px", sm: "10px" },
                      width: { xs: "250px", sm: "60%" },
                      "&:last-child": {
                        paddingBottom: 0,
                      },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "sans-serif",
                        fontVariant: "serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: 2,
                        color: "ActiveBorder",
                      }}
                    >
                      {users.name}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontVariant: "serif",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 800,
                        fontSize: "16px",
                        lineHeight: 2,
                      }}
                      color="textSecondary"
                    >
                      {users.company}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        // fontFamily: '"Fira Sans", serif',
                        // fontStyle: "italic",
                        // fontVariant: "small-caps",
                        color: "rgb(164, 20, 96)",
                        fontWeight: "bold",
                        fontSize: "16px",
                        lineHeight: 2,
                      }}
                      color="textSecondary"
                    >
                      {" "}
                      {users.occupation}
                    </Typography>
                    <List sx={{ display: "flex", padding: 0, marginTop: 1 }}>
                      {users.details_view === 1 ? (
                        <ListItem sx={{ paddingLeft: "0px" }}>
                          <Button
                            component="a"
                            href={`/${users.company_short}`}
                            target="_blank"
                            startIcon={<VisibilityIcon />}
                            sx={{
                              textTransform: "none",
                              bgcolor: "#A41460",
                              fontSize: "1.1rem",
                              fontFamily: "sans-serif",
                              fontWeight: 600,
                            }}
                            variant="contained"
                          >
                            View
                          </Button>
                        </ListItem>
                      ) : (
                        <ListItem sx={{ paddingLeft: "0px" }}>
                          <Button
                            onClick={() => handleClickOpen(users)}
                            startIcon={<VisibilityIcon />}
                            sx={{
                              textTransform: "none",
                              bgcolor: "#A41460",
                              fontSize: "1.1rem",
                              fontFamily: "sans-serif",
                              fontWeight: 600,
                            }}
                            variant="contained"
                          >
                            View
                          </Button>
                        </ListItem>
                      )}
                      <ListItem sx={{ paddingLeft: "0px" }}>
                        <Button
                          component="a"
                          href={`https://api.whatsapp.com/send/?text=${users.name} ${users.mobile} ${users.company} ${users.occupation}`}
                          target="_blank"
                          startIcon={<ShareIcon />}
                          sx={{
                            fontFamily: "sans-serif",
                            fontWeight: 600,

                            textTransform: "none",
                            bgcolor: "#A41460",
                            fontSize: "1.1rem",
                          }}
                          variant="contained"
                        >
                          Share
                        </Button>
                      </ListItem>
                      <ListItem sx={{ paddingLeft: "0px" }}>
                        <ListItemIcon>
                          <Tooltip title={users.area} arrow>
                            <LocationOnIcon
                              style={{
                                color: "A41460",
                                fontSize: "2.0em",
                              }}
                            />
                          </Tooltip>
                        </ListItemIcon>
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              ))
          )}
        </Box>
        <ScrollToTopButton />;
      </Box>

      {open && (
        <>
          <ProfileModel open={open} onClose={handleClose} id={state.id} />
        </>
      )}
      {/* {opens && (
        <>
          <EntryModel open={opens} onClose={handleCloses} />
        </>
      )} */}
    </>
  );
};

export default Service;
