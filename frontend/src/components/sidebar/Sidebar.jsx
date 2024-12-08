import WeatherApp from "./Weather/Widget";
import TrendingNews from "./TrendingNews";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <WeatherApp />
      <TrendingNews />
    </div>
  );
};

export default Sidebar;
