import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import { Outlet } from "react-router-dom";

const RootLayout = ({ isLoggedIn, logInHandler }) => {
	return (
		<div className="Header">
			<Header isLoggedIn={isLoggedIn} logInHandler={logInHandler} />
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLayout;
