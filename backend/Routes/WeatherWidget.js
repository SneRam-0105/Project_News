import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const apiKey = process.env.WEATHER_API_KEY;

router.get('/hello', async(req, res)=>{
  res.send('hello world')
});

router.get('/', async (req, res) => {
  const { city } = req.query;
  console.log(apiKey);
  console.log(city);

  if (!city) {
    return res.status(400).json({ error: "City name is required" });
  }

  try {
    const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    // https://api.openweathermap.org/data/2.5/weather?q=Turku&appid=7bd943fa58373bc02c5baaf8ee3d0477
    
   // console.log(response);
    const weatherData = {
      cityName: response.data.name,
      temperature:Math.round(response.data.main.temp - 273.15),
      description: response.data.weather.map(item=>item.description),
      iconCode: response.data.weather.map(item=>item.icon),
    };
    weatherData.iconUrl = `https://openweathermap.org/img/wn/${weatherData.iconCode}@4x.png`,

    console.log(weatherData);

    res.send(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

export default router;
