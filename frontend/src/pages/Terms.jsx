import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Terms = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                flexDirection: "column",
                padding: 4,
                position: "relative",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    marginBottom: 3,
                    color: "#aa3030",
                    fontWeight: "bold",
                }}
            >
                Terms and Conditions
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    maxWidth: "800px",
                    marginBottom: 2,
                    lineHeight: 1.8,
                    textAlign: "justify",
                }}
            >
                Welcome to Edu News! By accessing or using our website, you agree to comply with the following terms and conditions.
                These terms govern your use of our services, including subscriptions and newsletters offered to our regular users.
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    maxWidth: "800px",
                    marginBottom: 2,
                    lineHeight: 1.8,
                    textAlign: "justify",
                }}
            >
                Subscriptions provide access to premium content and exclusive updates, ensuring you stay informed about the latest trends in IT, Business, and Education.
                By subscribing, you agree to receive regular newsletters and updates directly to your email. You may opt out at any time by following the unsubscribe link in our emails.
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    maxWidth: "800px",
                    marginBottom: 2,
                    lineHeight: 1.8,
                    textAlign: "justify",
                }}
            >
                Edu News reserves the right to modify or update these terms at any time without prior notice.
                It is your responsibility to review these terms periodically to stay informed about any changes. Continued use of our website signifies your acceptance of the updated terms.
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    maxWidth: "800px",
                    marginBottom: 4,
                    lineHeight: 1.8,
                }}
            >
                For further inquiries or assistance, feel free to contact us at{" "}
                <Typography
                    component="a"
                    href="mailto:support@edunews.com"
                    sx={{
                        color: "#aa3030",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    support@edunews.com
                </Typography>.
            </Typography>

            <Button
                variant="contained"
                href="mailto:support@edunews.com"
                sx={{
                    ml: 4,
                    position: "absolute",
                    left: "0",
                    top: "80%",
                    transform: "translateY(-50%)",
                    backgroundColor: "#aa3030",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    padding: "4px 8px",
                    width: "20%",
                    "&:hover": {
                        backgroundColor: "red",
                    },
                }}
            >
                Contact Us
            </Button>
        </Box >
    );
};

export default Terms;
