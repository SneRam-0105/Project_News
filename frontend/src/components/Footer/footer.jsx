import { Box, Typography, Link, Grid, Divider } from "@mui/material";

export default function Footer({ isDarkMode }) {
  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        backgroundColor: isDarkMode ? "#080808" : "#f0f0f0",
        color: isDarkMode ? "#e6e6e6" : "#191919",
        padding: "35px 0",
        fontFamily: "Rosario, sans-serif",
      }}
    >
      <Grid container spacing={4} justifyContent="center" sx={{ px: 2 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "50vh", paddingTop: "30px" }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: "#aa3030", mb: 2 }}>
              Contact Us
            </Typography>
            <Typography>Email: info@newspaper.com</Typography>
            <Typography>Address: 123 Helsinki, Finland</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: "#aa3030", mb: 2 }}>
              Quick Links
            </Typography>
            <Link href="/about" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              About Us
            </Link>
            <Link href="/advertise" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Advertise
            </Link>
            <Link href="/terms" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Terms of Service
            </Link>
            <Link href="/privacy" color="inherit" underline="hover" sx={{ display: "block" }}>
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: "#aa3030", mb: 2 }}>
              Follow Us
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link href="https://facebook.com" target="_blank" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Facebook
              </Link>
              <Link href="https://twitter.com" target="_blank" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Twitter
              </Link>
              <Link href="https://instagram.com" target="_blank" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Instagram
              </Link>
            </div>
          </Grid>
        </div>
      </Grid>
      <Divider sx={{ bgcolor: "#545454", my: 4 }} />
      <Box sx={{ textAlign: "center", fontSize: "12px" }}>
        <Typography>
          &copy; 2024 Newspaper Inc. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}
