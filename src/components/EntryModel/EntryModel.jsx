import React, { useRef, useState, Fragment } from "react";
import axios from "axios";
import { Dialog, Grid, DialogTitle, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EntryModel = ({ maxWidth, open = false, onClose }) => {

  function makeid() {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  const form = useRef(null);
  const [forms, setForms] = useState({
    contact_name: "",
    contact_email: "",
    contact_mobile: "",
    contact_subject: "Entry Popup",
  });

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      url: "http://businessboosters.club/public/api/createPopupEntry",
      method: "POST",
      params: {
        contact_name: forms.contact_name,
        contact_email: forms.contact_email,
        contact_mobile: forms.contact_mobile,
        contact_subject: "Entry Popup",
      },
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setForms({
          contact_name: "",
          contact_email: "",
          contact_mobile: "",
          contact_subject: "",
        });
        onClose();
        localStorage.setItem("dataKey", JSON.stringify(makeid()));
      })
      .catch((err) => {
        console.error("Submission Failed", err);
      });
  };

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth={maxWidth}
        className="modalWrapper quickview-dialog"
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Entry Popup</Typography>
          {onClose ? (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{ color: (theme) => theme.palette.grey[500] }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <Grid className="modalBody modal-body" sx={{ padding: 2 }}>
          <div className="wpo-service-single-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <form
                    ref={form}
                    onSubmit={submitHandler}
                    className="contact-validation-active"
                  >
                    <div className="row">
                      <div className="col col-lg-6 col-12 pb-4">
                        <div className="form-field">
                          <input
                            style={{ color: "Black" }}
                            value={forms.contact_name}
                            type="text"
                            name="contact_name"
                            onChange={changeHandler}
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col col-lg-6 col-12 pb-4">
                        <div className="form-field">
                          <input
                            style={{ color: "Black" }}
                            value={forms.contact_mobile}
                            type="tel"
                            name="contact_mobile"
                            onChange={changeHandler}
                            placeholder="Your phone"
                          />
                        </div>
                      </div>
                      <div className="col col-lg-12 col-12 pb-4">
                        <div className="form-field">
                          <input
                            style={{ color: "Black" }}
                            value={forms.contact_email}
                            type="email"
                            name="contact_email"
                            onChange={changeHandler}
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="submit-area pt-4"
                      style={{ textAlign: "center" }}
                    >
                      <button
                        type="submit"
                        className="theme-btn"
                        style={{
                          width: "200px",
                          backgroundColor: "#A41460",
                          borderRadius: "50px",
                          fontWeight: "600",
                          color: "white",
                          padding: "13px",
                          margin: "auto",
                          display: "block",
                        }}
                      >
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};

export default EntryModel;

