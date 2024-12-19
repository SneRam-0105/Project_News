import { useOutletContext } from "react-router-dom";
import Articles from "../components/Article/Articles";
import WeatherApp from "../pages/Weather_Page";

const Home_Page = () => {
  const { isDarkMode } = useOutletContext();

  // Conditional styles for dark mode
  const darkModeStyles = {
    background: isDarkMode ? "#121212" : "#e6e6e6",
    color: isDarkMode ? "#e0e0e0" : "#191919",
  };

  return (
    <div style={{ backgroundColor: darkModeStyles.background }}>
      <div className="two">
        <div className="main">
          <Articles />
        </div>
        <div className="aside">
          <WeatherApp />
        </div>
      </div>
    </div>
  );
};

export default Home_Page;
