import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Advertise = () => {
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
                Advertise
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    maxWidth: "800px",
                    marginBottom: 4,
                    lineHeight: 1.8,
                    textAlign: "justify",
                }}
            >
                Partner with Edu News to showcase your brand to a wide audience interested in IT, Business, and Education.
                Our platform offers tailored advertising solutions designed to maximize your reach and impact.
                From banner ads and sponsored content to targeted campaigns, we provide flexible options to meet your marketing goals.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    maxWidth: "800px",
                    marginBottom: 4,
                    textAlign: "justify",
                    lineHeight: 1.8,
                }}
            >
                With a growing readership of professionals, students, and industry experts, Edu News is the perfect platform to promote your products, services, or events.
                Let us help you connect with a highly engaged and relevant audience. For inquiries and pricing details, please contact us at{" "}
                <Typography
                    component="a"
                    href="mailto:advertise@edunews.com"
                    sx={{
                        color: "#aa3030",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    advertise@edunews.com
                </Typography>.
            </Typography>

            <Button
                variant="contained"
                href="mailto:advertise@edunews.com"
                sx={{
                    mt: 4,
                    ml: 4,
                    position: "absolute",
                    left: "0",
                    top: "50%",
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
        </Box>
    );
};

export default Advertise;
