import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
} from "@mui/material";
import DefaultImage from '/src/assets/trending-news.jpg';
import { useOutletContext } from "react-router-dom";

function Widget({
  cityName,
  temperature,
  description,
  iconUrl,
  submitButton,
  click,

}) {
	const { isDarkMode } = useOutletContext();


  return (
    <Box
      sx={{
        padding: 1.5,
        maxWidth: 350,
      }}
    >
      <Box
        sx={{
          border: "1px solid #545454",
          padding: 1.2,
          marginBottom: 3,
          borderRadius: 1,
          backgroundColor: "#d4e5fa",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {cityName}
        </Typography>
        <Box
          sx={{
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ marginRight: 1, width: "120px", height: "240px" }}
          >
            <img src={iconUrl} alt="" style={{ height: "250px" }} />
          </Typography>
        </Box>
        <Typography variant="h5">{temperature}°C</Typography>
        <Typography variant="h6">{description}</Typography>
        <div style={{ display: "flex" }}>
          <TextField
            label="Enter City"
            variant="outlined"
            onChange={click}
            sx={{ width: "200px" }}
          />
          <Button
            onClick={submitButton}
            variant="h3"
            sx={{ color: "#aa3030", ml: "10px" }}
          >
            Search
          </Button>
        </div>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color: isDarkMode ? "#e6e6e6" : "#191919" }}>
        Trending News
      </Typography>
      <Card sx={{
        display: "flex",
        marginBottom: 2,
        boxShadow: 1,
        borderRadius: 1,
        backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
      }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" sx={{color:isDarkMode ? "#e6e6e6" : "#191919"}}>Stocks Rise in ‘Defensive’ Session; Dollar Gains: Markets Wrap</Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={DefaultImage}
          alt="News Image"
          sx={{
            width: 170,
            height: 230,
            borderRadius: 1,
            objectFit: "inherit",
          }}
        />
      </Card>

      <Card sx={{ backgroundColor: isDarkMode ? "#1e1e1e" : "#e6e6e6",}}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" , color: isDarkMode ? "#e6e6e6" : "#191919"}}>
            Watch the news on YouTube
          </Typography>
        </CardContent>
        <iframe
          width="500"
          height="350"
          src="https://www.youtube.com/embed/AJDWzCPZZbA?si=VF_WHizCN2koBg-g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Card>
    </Box>
  );
}

export default Widget;
