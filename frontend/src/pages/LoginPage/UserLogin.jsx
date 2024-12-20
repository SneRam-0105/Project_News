import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import logoForDark from '../../assets/LOGO_black.png';
import logoForBright from '../../assets/LOGO.png';

const UserLogin = ({ logInHandler }) => {
  const { isDarkMode } = useOutletContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.toLowerCase() === "a@b.com" && password.toLowerCase() === "team5") {
      logInHandler(true);
      navigate("/");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  const buttonStyles = {
    margin: "10px 0",
    width: "50%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #000",
    fontSize: "16px",
    textTransform: "capitalize",
  };

  const darkModeStyles = {
    color: "#e6e6e6",
    backgroundColor: "#191919",
  };

  const lightModeStyles = {
    color: "#000",
    backgroundColor: "#e6e6e6",
  };

  return (
    <div style={{ backgroundColor: isDarkMode ? darkModeStyles.backgroundColor : lightModeStyles.backgroundColor, height: "100vh" }}>
      <Container sx={{ paddingBottom: "20vh" }}></Container>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "55vh",
        mx: "65vh",
        backgroundColor: isDarkMode ? "#545454" : "#fff",
        padding: 3,
        borderRadius: 2,
      }}>
        <img
          src={isDarkMode ? logoForDark : logoForBright}
          alt="EduNews Logo"
          style={{
            width: "150px",
            height: "auto",
            marginBottom: "30px",
          }}
        />
        <form onSubmit={handleSubmit} style={{ width: "80%" }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            sx={{
              marginBottom: 2,
              input: {
                color: isDarkMode ? darkModeStyles.color : lightModeStyles.color,
              },
              label: {
                color: isDarkMode ? darkModeStyles.color : lightModeStyles.color,
              },
            }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            sx={{
              marginBottom: 2,
              input: {
                color: isDarkMode ? darkModeStyles.color : lightModeStyles.color,
              },
              label: {
                color: isDarkMode ? darkModeStyles.color : lightModeStyles.color,
              },
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                ...buttonStyles,
                backgroundColor: "#aa3030",
                color: isDarkMode ? darkModeStyles.color : lightModeStyles.color,
                width: "100%",
              }}
            >
              Login
            </Button>
            <Typography variant="body2" sx={{ textAlign: "center", color: isDarkMode ? darkModeStyles.color : lightModeStyles.color }}>
              or
            </Typography>
            <NavLink to="/" style={{ textDecoration: "none", width: "50%" }}>
              <Button
                sx={{
                  ...buttonStyles,
                  backgroundColor: isDarkMode ? "#444" : "#a3a3a3",
                  width: "100%",
                  padding: "10px",
                  color: isDarkMode ? darkModeStyles.color : lightModeStyles.color,
                  mb: "20px"
                }}
              >
                Continue as guest
              </Button>
            </NavLink>
          </Box>
          <Typography
            variant="caption"
            sx={{
              marginTop: "30px",
              textAlign: "center",
              fontSize: "12px",
              color: isDarkMode ? darkModeStyles.color : lightModeStyles.color,
            }}
          >
            By creating an account or signing in, I agree to the{" "}
            <a href="/terms" style={{ color: isDarkMode ? darkModeStyles.color : lightModeStyles.color }}>
              Terms of Use
            </a>{" "}
            and have read our{" "}
            <a href="/privacy" style={{ color: isDarkMode ? darkModeStyles.color : lightModeStyles.color }}>
              Privacy Policy
            </a>.
          </Typography>
        </form>
      </Box>
    </div>
  );
};

export default UserLogin;