import "./App.css";
import Header from "./components/Header/header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/Footer/footer";
import Articles from "./components/Articles/It_articles";

function App() {
  return (
    <div className="two">
      <div className="Header">
        {" "}
        <Header />
      </div>
      <div className="main">
        <Articles />
      </div>
      <Sidebar />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
