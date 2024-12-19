import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const About_us = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "black",
                color: "white",
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
                }}
            >
                About Us
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    maxWidth: "800px",
                    marginBottom: 4,
                    lineHeight: 1.8,
                }}
            >
                Welcome to Edu News, your trusted source for the latest and most relevant updates in the IT, Business, and Education sectors.
                We bring you top-trending news, insightful articles, and expert opinions, all tailored to meet the needs of professionals, students, and curious minds alike.
                Our mission is to empower readers with accurate, timely, and engaging content that helps them stay ahead in an ever-changing world.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    maxWidth: "800px",
                    marginBottom: 4,
                    lineHeight: 1.8,
                }}
            >
                At Edu News, we believe that knowledge is the key to growth and success.
                That’s why we are committed to providing a seamless and enriching news experience.
                Whether you're looking for industry trends, educational breakthroughs, or business insights, Edu News is here to keep you informed and inspired.
            </Typography>

            <Typography
                variant="h4"
                sx={{
                    marginBottom: 2,
                    color: "#aa3030",
                    fontWeight: "bold",
                }}
            >
                Our Impact
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        sx={{
                            backgroundColor: "#1a1a1a",
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        <CardContent>
                            <Typography variant="h5" color="#aa3030">
                                200+
                            </Typography>
                            <Typography variant="body2">
                                Monthly Readers
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        sx={{
                            backgroundColor: "#1a1a1a",
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        <CardContent>
                            <Typography variant="h5" color="#aa3030">
                                100+
                            </Typography>
                            <Typography variant="body2">
                                Published Articles
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        sx={{
                            backgroundColor: "#1a1a1a",
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        <CardContent>
                            <Typography variant="h5" color="#aa3030">
                                2024
                            </Typography>
                            <Typography variant="body2">
                                Year Founded
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About_us;

