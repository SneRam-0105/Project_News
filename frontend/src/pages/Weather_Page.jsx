import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Widget from "../components/Weather/widget";

const WeatherApp = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("Helsinki");
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
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
    fetchWeatherData();
  }, []);

  const handleChanges = (e) => {
    setCity(e.target.value);
  };
  console.log(weather);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Widget
          key={weather.cityName}
          cityName={city}
          temperature={weather.temperature}
          description={weather.description}
          iconUrl={weather.iconUrl}
        />
      )}
    </div>
  );
};

export default WeatherApp;
