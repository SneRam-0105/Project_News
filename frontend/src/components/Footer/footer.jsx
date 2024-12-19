import { Box, Typography, Link, Grid, Divider } from "@mui/material";

export default function Footer() {
  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        backgroundColor: "#191919",
        color: "#e6e6e6",
        py: 4,
        fontFamily: "Rosario, sans-serif",
      }}
    >
      <Grid container spacing={2} justifyContent="center" sx={{ px: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50vh",
            paddingTop: "30px",
          }}
        >
          {/* Contact Information */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ color: "#aa3030 !important", mb: 2 }}
            >
              <Link
                href="/contact"
                color="inherit"
                underline="hover"
                sx={{ display: "block", mb: 1 }}
              >
                {" "}
                Contact Us
              </Link>
            </Typography>
            <Typography>Email: edunews@newspaper.com</Typography>
            <Typography>Address: 123 Helsinki, Finland</Typography>
            {/* link in contact us */}
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: "#aa3030", mb: 2 }}>
              Quick Links
            </Typography>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              About Us
            </Link>
            <Link
              href="/advertise"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Advertise
            </Link>
            <Link
              href="/terms"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              color="inherit"
              underline="hover"
              sx={{ display: "block" }}
            >
              Privacy Policy
            </Link>
          </Grid>
          {/* Social Media Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: "#aa3030", mb: 2 }}>
              Follow Us
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <Link
                href="https://facebook.com"
                target="_blank"
                color="inherit"
                underline="hover"
                sx={{ mb: 1 }}
              >
                Facebook
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                color="inherit"
                underline="hover"
                sx={{ mb: 1 }}
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                color="inherit"
                underline="hover"
                sx={{ mb: 1 }}
              >
                Instagram
              </Link>
            </div>
          </Grid>
        </div>
      </Grid>
      <Divider sx={{ bgcolor: "#545454", my: 1 }} />

      {/* Footer Bottom */}
      <Box sx={{ textAlign: "center", fontSize: "0.8rem" }}>
        <Typography sx={{ paddingBottom: "10px" }}>
          &copy; 2024 Newspaper Inc. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}
