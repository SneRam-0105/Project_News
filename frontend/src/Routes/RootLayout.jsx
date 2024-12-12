import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<div className="Header">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLayout;
