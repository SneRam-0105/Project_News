import express from "express";
import cors from "cors";

import BusinessRoute from "./Routes/BusinessRoute.js";
import TechCrunchRoute from "./Routes/TechCrunchRoute.js";
import WeatherWidget from "./Routes/WeatherWidget.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use("/Homepage/Business", BusinessRoute);
app.use("/Homepage/IT", TechCrunchRoute);
app.use("/weather", WeatherWidget);

app.listen(PORT, () => {
  console.log(`Server is Running: http://localhost:${PORT}/`);
});
