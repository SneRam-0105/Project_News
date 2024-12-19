import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Widget from "../components/Weather/widget";
import { CircularProgress } from "@mui/material";

const WeatherApp = () => {
	const [weather, setWeather] = useState([]);
	const [city, setCity] = useState("Helsinki");
	const [loading, setLoading] = useState([true]);
	const [error, setError] = useState(null);

	const fetchWeatherData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5002/weather?city=${city}`
			);
			setWeather(response.data);
		} catch (error) {
			setError(`Error fetching data: ${error.message}`);
		}
		finally {
			setLoading(false)
		}
	};

	const SubmitButton = () => {
		fetchWeatherData();
	};

	const cityUpdate = (e) => {
		e.preventDefault();
		setCity(e.target.value);
	};

	useEffect(() => {
		fetchWeatherData(city);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			{error ? <p>{error}</p> : loading ? (
				<CircularProgress sx={{ color: "#aa3030", display: "flex" }} />
			) : (
				<Widget
					key={weather.cityName}
					cityName={weather.cityName}
					temperature={weather.temperature}
					description={weather.description}
					iconUrl={weather.iconUrl}
					submitButton={SubmitButton}
					click={cityUpdate}
				/>
			)}
		</div>
	);
};

export default WeatherApp;

