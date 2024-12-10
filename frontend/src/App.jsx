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
<<<<<<< HEAD
// import WeatherApp from './pages/Weather_Page'
=======
>>>>>>> ae14fe78d553f07dc58dca5f762e92393d53e695
import RootLayout from "./Routes/RootLayout";
import Footer from "./components/Footer/footer"; // Import Footer component

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home_Page />} />
        <Route path="IT" element={<IT_Page />} />
        <Route path="Business" element={<Business_Page />} />
        <Route path="Edu" element={<Edu_Page />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
      <Footer /> {/* Include Footer here */}
    </div>
  );
};

export default App;
