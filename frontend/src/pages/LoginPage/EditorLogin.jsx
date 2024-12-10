import { Box, TextField, Button, Typography } from "@mui/material";
import LOGO from "../../assets/LOGO.png";

const EditorLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    alert("Editor login submitted!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: "23vh",
        mx: "65vh",
        backgroundColor: "#f0f0f0",
        padding: 3,
        borderRadius: 1,
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
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        Editor Login
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "80%" }}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#b3b3b3",
              color: "#000",
              textTransform: "capitalize",
              padding: "10px 20px",
              width: "50%",
            }}
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditorLogin;
