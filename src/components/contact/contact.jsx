import { useState } from "react";
import { TextField, Button, Typography, Paper, Box, Card } from "@mui/material";
import React from "react";
import styles from "./contact.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import "./contact.module.css";
import ScrollToTopButton from "../scrool/scroll";
export const Contact = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [numberError, setNumberError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailValid = (e) => {
    setEmailId(e.target.value);
    if (!emailId) {
      setError("Email is required.");
    } else if (!emailRegex.test(emailId)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
    }
  };

  const numRegex = /^\d{9}$/;

  const handleNumberValid = (e) => {
    setNumber(e.target.value);
    if (!number) {
      setNumberError("Number is required.");
    } else if (!numRegex.test(number)) {
      setNumberError("Phone number must be exactly 10 digits");
    } else {
      setNumberError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Example of a single record
    const formData = new FormData();
    let headers = new Headers();

    formData.append("contact_name", name);
    formData.append("contact_email", emailId);
    formData.append("contact_mobile", number);
    formData.append("contact_message", message || "");

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Origin", "*");

    try {
      const response = await fetch(
        "http://businessboosters.club/public/api/createContact",
        {
          method: "POST",
          body: formData,
          heaaders: headers,
        }
      );

      if (response.status === 200) {
        navigate("/thankyou");
        const data = await response.json();
        console.log("Form submitted successfully:", data);
      } else {
        const errorText = await response.text();
        console.error("Server Error:", errorText);
        navigate("/failure");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      navigate("/failure");
    }
    setName("");
    setNumber("");
    setEmailId("");
    setMessage("");
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <Card component="main" className={styles.card}>
                <h1 className={styles["heading"]} style={{color:"black"}}>
                  {" "}
                  {props.data ? props.data.title : "loading"}
                </h1>
                <form
                  name="sentMessage"
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className={styles.gridContainer}>
                    <div className={styles.field}>
                      <TextField
                        id="full-name"
                        label="Full Name"
                        variant="standard"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        fullWidth
                        InputLabelProps={{
                          sx: {
                            fontSize: "16px",
                          },
                        }}
                        InputProps={{
                          sx: {
                            fontSize: "16px",
                          },
                        }}
                      />
                    </div>
                    <div className={styles.field}>
                      <TextField
                        id="number"
                        label="Mobile No"
                        variant="standard"
                        value={number}
                        onChange={handleNumberValid}
                        required
                        fullWidth
                        error={Boolean(numberError)}
                        helperText={numberError}
                        FormHelperTextProps={{
                          sx: {
                            fontSize: "14px",
                          },
                        }}
                        InputLabelProps={{
                          sx: {
                            fontSize: "16px",
                          },
                        }}
                        InputProps={{
                          sx: {
                            fontSize: "16px",
                          },
                        }}
                        inputProps={{
                          maxLength: 10,
                          pattern: "[0-9]*",
                          inputMode: "numeric",
                        }}
                        onInput={(e) => {
                          const input = e.target;
                          if (input.value.length > 10) {
                            input.value = input.value.slice(0, 10);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.gridContainer}>
                    <div className={styles.field}>
                      <TextField
                        id="email"
                        label="Email Id"
                        type="email"
                        variant="standard"
                        value={emailId}
                        onChange={handleEmailValid}
                        required
                        fullWidth
                        error={Boolean(error)}
                        helperText={error}
                        FormHelperTextProps={{
                          sx: {
                            fontSize: "14px",
                          },
                        }}
                        InputLabelProps={{
                          sx: {
                            fontSize: "16px",
                          },
                        }}
                        InputProps={{
                          sx: {
                            fontSize: "16px",
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.gridContainer}>
                    <div className={styles.field}>
                      <TextField
                        id="message"
                        label="Message"
                        type="text"
                        variant="standard"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        fullWidth
                        InputLabelProps={{
                          sx: {
                            fontSize: "16px",
                          },
                        }}
                        InputProps={{
                          sx: {
                            fontSize: "16px",
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.submitButton}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Submit Now
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
          <div
            className="col-md-3 col-md-offset-2 contact-info"
            style={{ marginLeft: "20px" }}
          >
            <div className="contact-item ">
              <h3>Contact Info</h3>
              <div className={styles["contact-container-1"]}>
                <p>
                  <span
                    style={{
                      color: "black",
                      fontWeight: "600",
                      marginBottom: "25px",
                    }}
                  >
                    <i
                      className="fa fa-map-marker"
                      style={{ color: "black" }}
                    ></i>{" "}
                    Address
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className={styles["contact-container-2"]}>
                <p>
                  <span
                    style={{
                      color: "black",
                      fontWeight: "600",
                      marginBottom: "25px",
                    }}
                  >
                    <i className="fa fa-phone" style={{ color: "black" }}></i>{" "}
                    Phone
                  </span>{" "}
                  <a
                    href={`tel:${props.data ? props.data.number1 : "#"}`}
                    className={styles.contactNumber}
                  >
                    {props.data ? props.data.phonename1 : "loading"}
                  </a>
                  <br />
                  <a
                    href={`tel:${props.data ? props.data.number2 : "#"}`}
                    className={styles.contactNumber}
                  >
                    {props.data ? props.data.phonename2 : "loading"}
                  </a>
                  <br />
                  <a
                    href={`tel:${props.data ? props.data.number3 : "#"}`}
                    className={styles.contactNumber}
                  >
                    {props.data ? props.data.phonename3 : "loading"}
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className={styles["contact-container-3"]}>
                <p>
                  <span style={{ color: "black", fontWeight: "600" }}>
                    <i
                      className="fa fa-envelope-o"
                      style={{ color: "black" }}
                    ></i>{" "}
                    Email
                  </span>{" "}
                  <a
                    href={`mailto:${props.data ? props.data.email : "#"}`}
                    className={styles.emailLink}
                  >
                    {props.data ? props.data.email : "loading"}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a
                      href={props.data ? props.data.facebook : "/"}
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.mobile : "/"}
                      target="_blank"
                    >
                      <i className="fa fa-android"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.youtube : "/"}
                      target="_blank"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};
