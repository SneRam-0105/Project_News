import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const apiKey = process.env.WEATHER_API_KEY;

router.get('/', async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City name is required" });
  }

  try {
    const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    
    const weatherData = {
      cityName: response.data.name,
      temperature:Math.round(response.data.main.temp - 273.15),
      description: response.data.weather[0].description,
      iconCode: response.data.weather[0].icon,
      iconUrl: `https://openweathermap.org/img/wn/${iconCode}@4x.png`,
    };

    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

export default router;
