import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

function Widget({ cityName, temperature, description, iconCode, iconUrl }) {
  return (
    <Box
      sx={{
        padding: 1.5,
        backgroundColor: "#f9f9f9",
        border: "1.5px solid #ccc",
        borderRadius: 2,
        maxWidth: 350,
      }}
    >
      <Box
        sx={{
          border: "1px solid #545454",
          padding: 1.2,
          marginBottom: 3,
          borderRadius: 1,
          backgroundColor: "grey.300",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Current Weather
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 1,
          }}
        >
          <Typography variant="h3" sx={{ marginRight: 1 }}>
            ☁️
          </Typography>
          <Typography variant="h5">22°C</Typography>
        </Box>
        <Typography>71.6 F</Typography>
        <Typography>Partially Cloudy</Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Trending News
      </Typography>

      <Card
        sx={{
          display: "flex",
          marginBottom: 2,
          boxShadow: 1,
          borderRadius: 1,
          backgroundColor: "grey.300",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="body2">
            Indian tech services firms have set up innovation and delivery
            centres
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image="https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="
          alt="Card Image"
          sx={{
            width: 120,
            height: 155,
            borderRadius: 1,
            objectFit: "inherit",
          }}
        />
      </Card>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Watch the news on YouTube
      </Typography>

      <Card
        sx={{
          display: "flex",
          boxShadow: 1,
          borderRadius: 1,
          backgroundColor: "grey.300",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="body2">
            Nokia acquires Rapid technology and R&D unit
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image="https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="
          alt="Card Image"
          sx={{
            width: 120,
            height: 120,
            borderRadius: 1,
            objectFit: "cover",
          }}
        />
      </Card>
    </Box>
  );
}

export default Widget;
