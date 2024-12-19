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
import RootLayout from "./Routes/RootLayout";
import LoginPage from "../src/pages/LoginPage/Login";
import EditorLogin from "../src/pages/LoginPage/EditorLogin";
import UserLogin from "../src/pages/LoginPage/UserLogin";
import ContactForm from "../src/pages/Contact_Page";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home_Page />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="UserLogin" element={<UserLogin />} />
        <Route path="EditorLogin" element={<EditorLogin />} />
        <Route path="IT" element={<IT_Page />} />
        <Route path="Business" element={<Business_Page />} />
        <Route path="Edu" element={<Edu_Page />} />
        <Route path="contact" element={<ContactForm />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
