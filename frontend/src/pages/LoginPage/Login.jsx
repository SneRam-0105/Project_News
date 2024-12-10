import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import LOGO from "../../assets/LOGO.png"

const LoginPage = () => {
	const buttonStyles = {
		margin: "10px 0",
		width: "50%",
		padding: "10px",
		backgroundColor: "#b3b3b3",
		color: "#000",
		borderRadius: "5px",
		border: "1px solid #000",
		fontSize: "16px",
		textTransform: "capitalize",
	};

	const handleEditorLogin = () => {
		window.location.href = "/EditorLogin";
	};

	const handleUserLogin = () => {
		window.location.href = "/UserLogin";
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				my: "15vh",
				mx: "65vh",
				backgroundColor: "#f0f0f0",
				padding: "20px",
				borderRadius: "5px"
			}}
		>
			<img
				src={LOGO}
				alt="EduNews Logo"
				style={{
					width: "150px",
					height: "auto",
					marginBottom: "10px",
				}}
			/>
			<Typography variant="subtitle1" sx={{ marginBottom: "30px" }}>
				Login to your EduNews account
			</Typography>
			<Button onClick={handleEditorLogin} sx={buttonStyles}>
				Editor
			</Button>
			<Button onClick={handleUserLogin} sx={buttonStyles}>
				User
			</Button>
			<Typography variant="body2" sx={{ margin: "20px 0" }}>
				<a href="/register" style={{ textDecoration: "none", color: "red" }}>
					Register
				</a>
			</Typography>
			<Typography variant="body2" sx={{ margin: "20px 0", textAlign: "center" }}>
				or
			</Typography>
			<NavLink to="/">
				<Button
					sx={{
						...buttonStyles,
						backgroundColor: "#a3a3a3",
						width: "100%",
						px: "50px",
					}}
				>
					Continue as guest
				</Button>
			</NavLink>

			<Typography
				variant="caption"
				sx={{ marginTop: "30px", textAlign: "center", fontSize: "12px" }}
			>
				By creating an account or signing in, I agree to the{" "}
				<a href="/terms" style={{ color: "#000" }}>
					Terms of Use
				</a>{" "}
				and have read our{" "}
				<a href="/privacy" style={{ color: "#000" }}>
					Privacy Policy
				</a>.
			</Typography>
		</Box>
	);
};

export default LoginPage;
