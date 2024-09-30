import {
  Card,
  TextField,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./interest.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import axios from "axios";
// import Footer from '../footer/Footer';
import { useNavigate } from "react-router-dom";

const occupation = [
  { value: "Business", label: "Business" },
  { value: "Professional", label: "Professional" },
];

const InterestPage = () => {
  const navigate = useNavigate();



  const formik = useFormik({
    initialValues: {
      person_name: "",
      person_mobile: "",
      person_email: "",
      person_occupation: "",
      person_service: "",
      person_company: "",
      person_area: "",
      person_message: "",
      person_join: false,
    },
    validationSchema: Yup.object({
      person_name: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Only letters are allowed")
        .required("Full Name is required"),
      person_mobile: Yup.string()
        .matches(/^\d+$/, "Only digits are allowed")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits")
        .required("Mobile Number is required"),
      person_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      person_occupation: Yup.string().required("Occupation is required"),
      person_company: Yup.string().required("Company name is required"),
      person_area: Yup.string().required("Area is required"),
      person_service: Yup.string().required("Product/Service is required"),
      person_message: Yup.string(),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post(
          "https://businessboosters.club/public/api/createInterest",
          values,
          { headers: { "Content-Type": "application/json" } }
        );
        if (response.status === 200) {
          navigate("/thankyou");
        } else {
          navigate("/failure");
        }
      } catch (error) {
        console.error(error);
        navigate("/failure");
      }
      setSubmitting(false);
    },
  });


  return (
    <div className={styles["container"]}>
      <Card component="main" className={styles["card"]}>
        <div className={styles["header-container"]}>
          <h1 className={styles["heading"]}>Want to Join BBC</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles["gridContainer"]}>
            <div className={styles["field"]}>
              <TextField
              required
                fullWidth
                label="Full Name"
                name="person_name"
                value={formik.values.person_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.person_name &&
                  Boolean(formik.errors.person_name)
                }
                helperText={
                  formik.touched.person_name && formik.errors.person_name
                }
                variant="standard"
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
            <div className={styles["field"]}>
              <TextField
              required
                fullWidth
                label="Email"
                name="person_email"
                value={formik.values.person_email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.person_email &&
                  Boolean(formik.errors.person_email)
                }
                helperText={
                  formik.touched.person_email && formik.errors.person_email
                }
                variant="standard"
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
            <div className={styles["field"]}>
              <TextField
              required
                fullWidth
                label="Mobile Number"
                name="person_mobile"
                value={formik.values.person_mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                inputProps={{ maxLength: 10 }}
                error={
                  formik.touched.person_mobile &&
                  Boolean(formik.errors.person_mobile)
                }
                helperText={
                  formik.touched.person_mobile && formik.errors.person_mobile
                }
                variant="standard"
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

          <div className={styles["gridContainer"]}>
            <div className={styles["field"]}>
              <TextField
              required
                fullWidth
                select
                label="Occupation"
                name="person_occupation"
                value={formik.values.person_occupation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.person_occupation &&
                  Boolean(formik.errors.person_occupation)
                }
                helperText={
                  formik.touched.person_occupation &&
                  formik.errors.person_occupation
                }
                variant="standard"
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
              >
                {occupation.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={styles["field"]}>
              <TextField
              required
                fullWidth
                label="Company"
                name="person_company"
                value={formik.values.person_company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.person_company &&
                  Boolean(formik.errors.person_company)
                }
                helperText={
                  formik.touched.person_company && formik.errors.person_company
                }
                variant="standard"
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
            <div className={styles["field"]}>
              <TextField
              required
                fullWidth
                label="Area"
                name="person_area"
                value={formik.values.person_area}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.person_area &&
                  Boolean(formik.errors.person_area)
                }
                helperText={
                  formik.touched.person_area && formik.errors.person_area
                }
                variant="standard"
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

          <div className={styles["gridContainer"]}>
            <div className={styles["field"]}>
              <TextField
                fullWidth
                label="Products / Services"
                name="person_service"
                value={formik.values.person_service}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.person_service &&
                  Boolean(formik.errors.person_service)
                }
                FormHelperTextProps={{
                    sx: {
                      fontSize: "14px",
                    },
                  }}
                variant="standard"
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
                  helperText = "Type all Products or Services separated by comma"
              />
            </div>
            <div className={styles["field"]}>
              <TextField
                fullWidth
                label="Message"
                name="person_message"
                value={formik.values.person_message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.person_message &&
                  Boolean(formik.errors.person_message)
                }
                helperText={
                  formik.touched.person_message && formik.errors.person_message
                }
                variant="standard"
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

          <div className={styles["gridContainer"]}>
            <div className={styles["field"]}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="person_join"
                    checked={formik.values.person_join}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                }
                label="To learn more about BBC, click here to attend the next meeting"
                sx={{
                    '.MuiFormControlLabel-label': { 
                      fontSize: '16px',
                    },
                  }}
              />
            </div>
          </div>

          <div className={styles["submitButton"]}>
            <Button
              type="submit"
              className={styles["submit-button"]}
              variant="contained"
            //   style={{
            //     width: "200px",
            //     backgroundColor: "#A41460",
            //     borderRadius: "50px",
            //     fontWeight: "600",
            //     color: "white",
            //     padding: "13px",
            //     margin: "auto",
            //     display: "block",
            //   }}
            endIcon={<ArrowForwardIcon />}
              disabled={formik.isSubmitting}
            >
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default InterestPage;
