
import './App.css'
import Header from '../components/Header/header'
import Widget from '../components/Weather/widget'
import Footer from '../components/Footer/footer'

function App() {
  return (
    <div className="two">

      <div className="Header"> <Header /></div>
      <div className="main">Main</div>
      <div className="aside"><Widget /></div>
      <div className="footer"><Footer /></div>
    </div>












  )
};

export default App
