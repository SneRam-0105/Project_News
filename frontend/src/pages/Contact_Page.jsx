import { TextField, Button, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useOutletContext } from 'react-router-dom';  // to get dark mode context

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "40px",
	},
	paper: (props) => ({
		borderRadius: "10px",
		backgroundColor: props.isDarkMode ? "#333" : "#f9f9f9",  // background color based on dark mode
		color: props.isDarkMode ? "#e6e6e6" : "#aa3030",  // text color based on dark mode
		boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
		padding: "40px",
		maxWidth: "50%",
		width: "100%",
	}),
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
});

const ContactForm = () => {
	const { isDarkMode } = useOutletContext();  // Access dark mode from context
	const classes = useStyles({ isDarkMode });  // Pass dark mode as prop to styles
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

	const handleSubmit = (e) => {
		e.preventDefault();
		window.alert("Form Submitted Successfully")
		console.log("Form Data:", formData);
	};

	return (
		<div className={classes.root} style={{ height: "100vh", paddingTop: "20vh", backgroundColor: isDarkMode ? "#191919" : "#e6e6e6" }}>

			<Paper className={classes.paper} >
				<Typography variant="h4" fontWeight="bold" gutterBottom>
					Contact Form
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
						sx={{ marginBottom: "10px" }}
					/>
					<TextField
						label="Email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						className={classes.textField} sx={{ marginBottom: "10px" }}
					/>
					<TextField
						label="Phone Number"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						className={classes.textField} sx={{ marginBottom: "10px" }}
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
						className={classes.textField} sx={{ marginBottom: "10px" }}
					/>
					<Button
						type="submit"
						variant="contained"
						className={classes.submitButton}
					>
						Submit
					</Button>
				</form>
			</Paper>
		</div>
	);
};

export default ContactForm;
