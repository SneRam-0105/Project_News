import Articles from "../components/Article/Articles";

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
			</div>
		</>
	);
};

export default Home_Page;
