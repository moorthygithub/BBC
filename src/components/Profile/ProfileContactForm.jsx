import React, { useRef, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

const ProfileContactForm = () => {
    const navigate = useNavigate();
    const form = useRef(null);
    const [forms, setForms] = useState({
        contact_to: localStorage.getItem('short'),
        contact_name: '',
        contact_email: '',
        contact_mobile: '',
        contact_subject: 'Enquiry',
        contact_message: ''
    });

    const validateOnlyDigits = (inputtxt) => {
        var phoneno = /^\d+$/;
        if (inputtxt.match(phoneno) || inputtxt.length == 0) {
            return true;
        } else {
            return false;
        }
    }
    const validateOnlyText = (inputtxt) => {

        var re = /^[A-Za-z ]+$/;
        if (inputtxt === "" || re.test(inputtxt)) {
            return true;
        } else {
            return false;
        }
    }

    const onInputChange = (e) => {

        if (e.target.name == "contact_mobile") {

            if (validateOnlyDigits(e.target.value)) {
                setForms({
                    ...forms,
                    [e.target.name]: e.target.value,
                });
            }

        } else if (e.target.name == "contact_name") {

            if (validateOnlyText(e.target.value)) {
                setForms({
                    ...forms,
                    [e.target.name]: e.target.value,
                });
            }

        } else {

            setForms({
                ...forms,
                [e.target.name]: e.target.value,
            });
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        var v = document.getElementById("addcheck").checkValidity();
        var v = document.getElementById("addcheck").reportValidity();
        if (v) {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');
            headers.append('Access-Control-Allow-Origin', '*');
            axios({
                url: "http://businessboosters.club/public/api/createEnquiry",
                method: "POST",
                params: {
                    contact_to: localStorage.getItem('short'),
                    contact_name: forms.contact_name,
                    contact_email: forms.contact_email,
                    contact_mobile: forms.contact_mobile,
                    contact_subject: 'Enquiry',
                    contact_message: forms.contact_message,
                },
                headers: headers,
            }).then((res) => {
                if (res.data.code == '200') {

                    setTimeout(() => {
                        navigate('/thankyoue')
                    }, 1)

                } else {
                    setTimeout(() => {
                        navigate('/failuree')
                    }, 1)
                }


            });

        }
    };

    return (
        <form id="addcheck" ref={form} style={{ marginTop: '40px' }} onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <TextField
                            style={{ color: 'Black' }}
                            value={forms.contact_name}
                            fullWidth
                            type="text"
                            name="contact_name"
                            required
                            onChange={(e) => onInputChange(e)}
                            label="Your Name" />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <TextField
                            style={{ color: 'Black' }}
                            fullWidth
                            value={forms.contact_mobile}
                            type="text"
                            name="contact_mobile"
                            inputProps={{ minLength: 10, maxLength: 10 }}
                            required
                            onChange={(e) => onInputChange(e)}
                            label="Your phone" />
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <TextField
                            fullWidth
                            style={{ color: 'Black' }}
                            value={forms.contact_email}
                            type="email"
                            name="contact_email"
                            required
                            onChange={(e) => onInputChange(e)}
                            label="Your Email" />
                    </div>
                </div>

                <div className="col col-lg-12 col-12">
                    <TextField
                        fullWidth
                        style={{ color: 'Black', height: '120px' }}
                        required
                        value={forms.contact_message}
                        onChange={(e) => onInputChange(e)}
                        name="contact_message"
                        label="Message">
                    </TextField>
                </div>
            </div>
            <Button
                className="details theme-btn"
                style={{ width: '200px', backgroundColor: '#A41460', borderRadius: '50px', fontWeight: '600', color: 'white', padding: '13px',display:'flex',justifyContent:'center',alignItems:'centre',marginLeft:"240px" }}
            >
                Submit
            </Button>
        </form >
    )
}

export default ProfileContactForm;