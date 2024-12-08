import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Widget from "../components/Weather/widget";

const WeatherApp = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    axios
      .get(`http://localhost:5002/weather?city=${city}`) // change port no. accordingly
      .then((response) => {
        weather = setWeather(response.data);
        console.log(weather);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        weather.map((item) => <Widget key={item.cityName} {...item} />)
      )}
    </div>
  );
};

export default WeatherApp;
