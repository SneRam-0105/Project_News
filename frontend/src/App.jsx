import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider
} from "react-router-dom";
import "./App.css";
import Home_Page from "./pages/Home_Page";
import IT_Page from "./pages/IT_Page";
import Business_Page from "./pages/Business_Page";
import Edu_Page from "./pages/Edu_Page";
import RootLayout from "./Routes/RootLayout";
// import LoginPage from "../src/pages/LoginPage/Login";
// import EditorLogin from "../src/pages/LoginPage/EditorLogin";
import UserLogin from "../src/pages/LoginPage/UserLogin";
import About_us from "./pages/About_us";
import Advertise from "./pages/Advertise";
import Terms from "./pages/Terms";
import Privacy_Policy from "./pages/Privacy_Policy";
import { useState } from "react";

const App = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const logInHandler = (value) => {
		console.log(value)
		//toggle isLoggedIn usestate
		setIsLoggedIn(value);
	}

  // Managing the dark mode state at the top level
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function to switch between dark mode and light mode
  const handleThemeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout isLoggedIn={isLoggedIn} logInHandler={logInHandler} isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />}>
        <Route index element={<Home_Page />} />
        {/* <Route path="Login" element={<LoginPage />} /> */}
        <Route path="UserLogin" element={<UserLogin logInHandler={logInHandler} />} />
        {/* <Route path="EditorLogin" element={<EditorLogin />} /> */}
        <Route path="IT" element={<IT_Page />} />
        <Route path="Business" element={<Business_Page />} />
        <Route path="Edu" element={<Edu_Page />} />
				<Route path="About" element={<About_us />} />
				<Route path="Advertise" element={<Advertise />} />
				<Route path="Terms" element={<Terms />} />
				<Route path="PrivacyPolicy" element={<Privacy_Policy />} />

      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
