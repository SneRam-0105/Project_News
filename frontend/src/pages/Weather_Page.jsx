import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Widget from "../components/Weather/widget";
import { CircularProgress } from "@mui/material";

const WeatherApp = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("Helsinki");
  const [loading, setLoading] = useState([true]);

  const weatherSubmitButton = (e) => {
    setCity(e.target.value);
    fetchWeatherData();
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5002/weather?city=${city}`
      );
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);
  //console.log(weather);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Widget
          key={weather.cityName}
          cityName={weather.cityName}
          temperature={weather.temperature}
          description={weather.description}
          iconUrl={weather.iconUrl}
          submitButton={weatherSubmitButton}
        />
      )}
    </div>
  );
};

export default WeatherApp;
