import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,

} from "@mui/material";

function Widget({
  cityName,
  temperature,
  description,
  iconUrl,
  submitButton,
  click,
}) {
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
          backgroundColor: "#6eb9ee",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {cityName}
        </Typography>
        <Box
          sx={{
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 1,
          }}
        >
          <Typography variant="h3" sx={{ marginRight: 1 }}>
            <img src={iconUrl} alt="" />
          </Typography>
        </Box>
        <Typography variant="h5">{temperature}°C</Typography>
        <Typography>{description}</Typography>
        <TextField label="Search City" variant="outlined" onChange={click} />
        <Button onClick={submitButton}>Search</Button>
      </Box>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Watch the news on YouTube
      </Typography>

      <Card

      >
        <CardContent sx={{ flexGrow: 1 }}>

        </CardContent>
        <iframe width="500" height="350" src="https://www.youtube.com/embed/AJDWzCPZZbA?si=VF_WHizCN2koBg-g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Card>

    </Box>
  );
}

export default Widget;