import Articles from "../components/Article/It_articles";
import Footer from "../components/Footer/footer";
import WeatherApp from "../pages/Weather_Page";
const Home_Page = () => {
  return (
    <>
      <div className="two">
        <div className="main">
          <Articles />
        </div>
        <div className="aside">
          <WeatherApp />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home_Page;
