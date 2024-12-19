import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "50px",
  },
  paper: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    color: "#aa3030 !important",
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
    maxWidth: "50%",
    width: "100%",
  },
  textField: {
    marginBottom: "10px",
  },
  submitButton: {
    backgroundColor: "#aa3030 !important",
    color: "white",
    "&:hover": {
      backgroundColor: "#191919 !important",
    },
    width: "100%",
  },
  message: {
    marginTop: "15px",
    color: "green",
  },
  errorMessage: {
    marginTop: "15px",
    color: "red",
  },
});

const ContactForm = () => {
  const classes = useStyles();
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    if (formData[name] != "") {
      setSubmissionMessage("Message sent successfully !!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setSubmissionMessage("Sorry, There was a problem sending your message.");
      setError(true);
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            className={classes.textField}
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
        {submissionMessage && (
          <Typography
            variant="body1"
            className={error ? classes.errorMessage : classes.message}
          >
            {" "}
            {submissionMessage}{" "}
          </Typography>
        )}
      </Paper>
    </div>
  );
};

export default ContactForm;
