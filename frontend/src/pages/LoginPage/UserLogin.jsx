import { Box, TextField, Button, Typography } from "@mui/material";
import LOGO from "../../assets/LOGO.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const UserLogin = ({ logInHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username.toLowerCase() === "a@b.com" &&
      password.toLowerCase() === "team5"
    ) {
      logInHandler(true);
      navigate("/");

    }
    else {
      // Add your login logic here
      alert("Invalid credentials! Please try again.");

    }

  };
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

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: "23vh", mx: "65vh", backgroundColor: "#f0f0f0", padding: 3, borderRadius: 1 }}>
      <img src={LOGO} alt="EduNews Logo" style={{ width: "150px", height: "auto", marginBottom: "10px" }} />
      <form onSubmit={handleSubmit} style={{ width: "80%" }}>
        <TextField label="Email"
          type="email"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
          onChange={(e) => setUsername(e.target.value)} />
        <TextField label="Password"
          type="password"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          {/* <NavLink to="/" style={{ textDecoration: "none", width: "50%" }}> */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              ...buttonStyles,
              backgroundColor: "#b3b3b3",
              color: "#000",
              textTransform: "capitalize",
              padding: "10px 20px",
              width: "100%",
            }}>
            Login
          </Button>
          {/* </NavLink> */}
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            or
          </Typography>
          <NavLink to="/" style={{ textDecoration: "none", width: "50%" }}>
            <Button
              sx={{
                ...buttonStyles,
                backgroundColor: "#a3a3a3",
                width: "100%",
                padding: "10px",
              }}
            >
              Continue as guest
            </Button>
          </NavLink>
        </Box>
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
      </form>
    </Box>

  );
};

export default UserLogin;
