import {
  Card,
  TextField,
  MenuItem,
  Button,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./RegisterForm.module.css";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../scrool/scroll";

const genders = [
  { value: "MALE", label: "MALE" },
  { value: "FEMALE", label: "FEMALE" },
];

function RegisterForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [profileimage, setProfileimage] = useState(null);
  const [dateofbirth, setDateofbirth] = useState("");
  const [spouse, setSpouse] = useState("");
  const [company, setCompany] = useState("");
  const [anniversary, setAnniversary] = useState("");
  const [business, setBusiness] = useState("");
  const [experience, setExperience] = useState("");
  const [website, setWebiste] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [products, setProducts] = useState("");
  const [landline, setLandline] = useState("");
  const [producttag, setProducttag] = useState("");
  const [error, setError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [whatsappNumError, setWhatsappNumError] = useState("");

  //not i field
  const [working_hours, setWroking_hours] = useState("");
  const [category, setCategory] = useState("");
  const [company_short, setCompany_short] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileimage(file);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailValid = (e) => {
    setEmail(e.target.value);
    if (!email) {
      setError("Email is required.");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
    }
  };

  const numRegex = /^\d{10}$/;

  const handleNumberValid = (e) => {
    setMobilenumber(e.target.value);
    if (!mobilenumber) {
      setNumberError("Number is required.");
    } else if (!numRegex.test(mobilenumber)) {
      setNumberError("Phone number must be exactly 10 digits");
    } else {
      setNumberError("");
    }
  };

  const handleWhatsappNumValid = (e) => {
    setWhatsapp(e.target.value);
    if (!whatsapp) {
      setWhatsappNumError("WHatsapp Number is required.");
    } else if (!numRegex.test(whatsapp)) {
      setWhatsappNumError("Whatsapp number must be exactly 10 digits");
    } else {
      setWhatsappNumError("");
    }
  };

  const [dateError, setDateError] = useState("");
  const [anniversaryDateError, setAnniversaryDateError] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split("T")[0];

    if (selectedDate > today) {
      setDateError("Date cannot be in the future");
    } else {
      setDateError("");
      setDateofbirth(selectedDate);
    }
  };
  const handleAnniversaryDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split("T")[0];

    if (selectedDate > today) {
      setAnniversaryDateError("Date cannot be in the future");
    } else {
      setAnniversaryDateError("");
      setAnniversary(selectedDate);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Example of a single record
    const formData = new FormData();
    let headers = new Headers();

    formData.append("name", name);
    formData.append("gender", gender);
    formData.append("dob", dateofbirth);
    formData.append("image", profileimage);
    formData.append("email", email);
    formData.append("mobile", mobilenumber);
    formData.append("whatsapp_number", whatsapp);
    formData.append("spouse_name", spouse);
    formData.append("doa", anniversary);
    formData.append("company", company);
    formData.append("company_short", company_short || "");
    formData.append("category", category || "");
    formData.append("experience", experience);
    formData.append("working_hours", working_hours || "");
    formData.append("website", website);
    formData.append("landline", landline);
    formData.append("address", address);
    formData.append("product", products);
    formData.append("area", area);

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Origin", "*");

    try {
      const response = await fetch(
        "http://businessboosters.club/public/api/createUser",
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
    setGender("");
    setEmail("");
    setMobilenumber("");
    setWhatsapp("");
    setProfileimage(null);
    setDateofbirth("");
    setSpouse("");
    setCompany("");
    setAnniversary("");
    setBusiness("");
    setExperience("");
    setWebiste("");
    setAddress("");
    setArea("");
    setProducts("");
    setLandline("");
    setProducttag("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles["heading"]}>Registration</h1>
      <Card component="main" className={styles.card}>
        <form onSubmit={handleSubmit}>
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
                id="gender"
                select
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                variant="standard"
                fullWidth
                required
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
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={styles.emailfield}>
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="standard"
                value={email}
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
                id="mobile-no"
                label="Mobile No"
                variant="standard"
                type="number"
                value={mobilenumber}
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
            <div className={styles.field}>
              <TextField
                id="whatsapp"
                label="WhatsApp"
                variant="standard"
                type="number"
                value={whatsapp}
                onChange={handleWhatsappNumValid}
                required
                fullWidth
                error={Boolean(whatsappNumError)}
                helperText={whatsappNumError}
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
            <div className={styles.fileupload}>
              <FormControl fullWidth>
                <FormLabel required sx={{ fontSize: "14px" }}>
                  Profile Image
                </FormLabel>
                <div className={styles.fileContainer}>
                  <input
                    type="file"
                    id="profile-image"
                    name="image"
                    className={styles.hiddenInput}
                    onChange={handleFileChange}
                  />
                </div>
              </FormControl>
            </div>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.datefield}>
              <TextField
                id="date-of-birth"
                label="Date of Birth"
                variant="standard"
                type="date"
                value={dateofbirth}
                onChange={handleDateChange}
                required
                fullWidth
                error={Boolean(dateError)}
                helperText={dateError}
                InputLabelProps={{
                  sx: {
                    fontSize: "16px",
                  },
                  shrink: true,
                }}
                InputProps={{
                  sx: {
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                }}
                FormHelperTextProps={{
                  sx: {
                    fontSize: "14px",
                  },
                }}
                sx={{
                  "& label": {
                    transform: "translate(0, -0.5rem) scale(0.75)",
                  },
                }}
              />
            </div>
            <div className={styles.field}>
              <TextField
                id="spouse"
                label="Spouse Name"
                variant="standard"
                value={spouse}
                onChange={(e) => setSpouse(e.target.value)}
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
            <div className={styles.datefield}>
              <TextField
                id="date-of-anniversary"
                label="Date of Anniversary"
                variant="standard"
                type="date"
                value={anniversary}
                onChange={handleAnniversaryDateChange}
                fullWidth
                error={Boolean(anniversaryDateError)}
                helperText={anniversaryDateError}
                FormHelperTextProps={{
                  sx: {
                    fontSize: "14px",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontSize: "18px",
                  },
                  shrink: true,
                }}
                InputProps={{
                  sx: {
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                }}
                sx={{
                  "& label": {
                    transform: "translate(0, -0.5rem) scale(0.75)",
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.gridContainer1}>
            <div className={styles.field}>
              <TextField
                id="company"
                label="Name of the Company"
                variant="standard"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
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
                id="business-category"
                label="Business Category"
                variant="standard"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
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
                id="experience"
                label="No of Experiences"
                variant="standard"
                value={experience}
                type="text"
                onChange={(e) => setExperience(e.target.value)}
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
                id="website"
                label="Website"
                variant="standard"
                value={website}
                onChange={(e) => setWebiste(e.target.value)}
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
          <div className={styles.addressContainer}>
            <div className={styles.field1}>
              <TextField
                id="landline"
                type="number"
                label="Landline Number"
                variant="standard"
                value={landline}
                onChange={(e) => setLandline(e.target.value)}
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
            <div className={styles.field2}>
              <TextField
                id="address"
                label="Address"
                variant="standard"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                helperText="Please type Full Address"
                required
                fullWidth
                InputLabelProps={{
                  sx: {
                    fontSize: "16px",
                  },
                }}
                FormHelperTextProps={{
                  sx: {
                    fontSize: "14px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "16px",
                  },
                }}
              />
            </div>
            <div className={styles.field3}>
              <TextField
                id="area"
                label="Area"
                variant="standard"
                value={area}
                onChange={(e) => setArea(e.target.value)}
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
          <div className={styles.field}>
            <TextField
              id="products"
              label="Products /Services"
              variant="standard"
              value={products}
              onChange={(e) => setProducts(e.target.value)}
              fullWidth
              required
              InputLabelProps={{
                sx: {
                  fontSize: "16px",
                },
              }}
              FormHelperTextProps={{
                sx: {
                  fontSize: "14px",
                },
              }}
              InputProps={{
                sx: {
                  fontSize: "16px",
                },
              }}
              helperText="Type all Products or Services separated by comma"
            />
          </div>
          <div className={styles.field} style={{ marginTop: "10px" }}>
            <TextField
              id="product-tag"
              label="Product Tag"
              variant="standard"
              value={producttag}
              onChange={(e) => setProducttag(e.target.value)}
              fullWidth
              InputLabelProps={{
                sx: {
                  fontSize: "16px",
                },
              }}
              FormHelperTextProps={{
                sx: {
                  fontSize: "14px",
                },
              }}
              InputProps={{
                sx: {
                  fontSize: "16px",
                },
              }}
              helperText="Type all Products or Services related Tags Separated by comma ( like CCTV can be - Security System, Camera, Surveillance etc. )"
            />
          </div>
          {/* </div> */}
          <div className={styles.submitButton}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Register
            </Button>
          </div>
        </form>
        <ScrollToTopButton/>
      </Card>
    </div>
  );
}

export default RegisterForm;
