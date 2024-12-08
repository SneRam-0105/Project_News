import express from "express";
import cors from "cors";

import Businessrouter from "./Routes/BusinessRoute.js";
import WeatherWidget from "./Routes/WeatherWidget.js";
import Techrouter from "./Routes/TechCrunchRoute.js";

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());
<<<<<<< HEAD
app.use("/Homepage/Business", BusinessRoute);
app.use("/Homepage/IT", TechCrunchRoute);
app.use("/weather", WeatherWidget);
=======
app.use("/Homepage/Business", Businessrouter);
app.use("/Homepage/IT", Techrouter);
app.use("/weatherForeCast", WeatherWidget);
>>>>>>> 6b232827ae790cb142d3b70f793b88eeb63cff2c

app.listen(PORT, () => {
  console.log(`Server is Running: http://localhost:${PORT}/`);
});
