import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import { Outlet } from "react-router-dom";

const RootLayout = ({ isDarkMode, handleThemeChange }) => {
  return (
    <div className={`RootLayout ${isDarkMode ? 'dark' : 'light'}`}>
      <Header isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
      <Outlet context={{ isDarkMode }} />  {/* Pass down isDarkMode to children */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default RootLayout;
