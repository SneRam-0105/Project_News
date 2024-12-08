import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home_Page from "./pages/Home_Page";
import IT_Page from "./pages/IT_Page";
import Business_Page from "./pages/Business_Page";
import Edu_Page from "./pages/Edu_Page";
//import WeatherApp from './pages/Weather_Page'
import RootLayout from "./Routes/RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home_Page />} />
        <Route path="IT" element={<IT_Page />} />
        <Route path="Business" element={<Business_Page />} />
        <Route path="Edu" element={<Edu_Page />} />
        {/* <Route path='Weather' element={<WeatherApp />} /> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
