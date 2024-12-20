import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { useOutletContext } from 'react-router-dom';

const Privacy_Policy = () => {
  const { isDarkMode } = useOutletContext();  // Accessing isDarkMode from context

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: isDarkMode ? "#191919" : "#f0f0f0",  // Background color based on dark mode
        color: isDarkMode ? "#e6e6e6" : "#000",  // Text color based on dark mode
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: 3,
          color: "#aa3030",
          fontWeight: "bold",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Privacy Policy
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          marginBottom: 4,
          lineHeight: 1.8,
        }}
      >
        At Edu News, we value your privacy and are committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and safeguard the data you share with us when you use our website.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: isDarkMode ? "#2b2b2b" : "#ffffff",  // Card background based on dark mode
              color: isDarkMode ? "#e6e6e6" : "#000",  // Card text color based on dark mode
              textAlign: "left",
              padding: 2,
              height: "300px"
            }}
          >
            <CardContent>
              <Typography variant="h5" color="#aa3030" gutterBottom>
                Information We Collect
              </Typography>
              <Typography variant="body1" lineHeight={1.8}>
                We may collect personal details such as your name, email address, and preferences
                when you subscribe to our newsletters or register for services. Additionally, we collect
                non-personal information like your IP address and browsing behavior to enhance user experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: isDarkMode ? "#2b2b2b" : "#ffffff",  // Card background based on dark mode
              color: isDarkMode ? "#e6e6e6" : "#000",  // Card text color based on dark mode
              textAlign: "left",
              padding: 2,
              height: "300px"
            }}
          >
            <CardContent>
              <Typography variant="h5" color="#aa3030" gutterBottom>
                How We Use Your Information
              </Typography>
              <Typography variant="body1" lineHeight={1.8}>
                The information collected is used to deliver personalized content, send newsletters,
                and improve our website functionality. We may also use your data to communicate updates,
                promotions, or other relevant information.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: isDarkMode ? "#2b2b2b" : "#ffffff",  // Card background based on dark mode
              color: isDarkMode ? "#e6e6e6" : "#000",  // Card text color based on dark mode
              textAlign: "left",
              padding: 2,
              height: "300px"
            }}
          >
            <CardContent>
              <Typography variant="h5" color="#aa3030" gutterBottom>
                Third-Party Sharing
              </Typography>
              <Typography variant="body1" lineHeight={1.8}>
                Edu News does not sell, trade, or share your personal information with third parties
                without your consent, except as required by law.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ justifyContent: "left", alignItems: "left" }}>
        <Typography
          variant="body1"
          sx={{
            marginTop: 4,
            lineHeight: 1.8,
          }}
        >
          <strong>Your Rights:</strong> You can opt out of our newsletters at any time and request access to, modification,
          or deletion of your personal data by contacting us at <a href="mailto:privacy@edunews.com" style={{ color: "#aa3030" }}>privacy@edunews.com</a>.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: 2,
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          We regularly review and update our Privacy Policy to ensure transparency and compliance with applicable laws.
          Your continued use of our services indicates your acceptance of this policy.
        </Typography>
      </div>
    </Box>
  );
};

export default Privacy_Policy;
