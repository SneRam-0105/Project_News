import * as React from 'react';
import './App.css'
import Header from './components/Header/header'
import Widget from './components/Weather/widget'
import Footer from './components/Footer/footer'
import Articles from './components/Articles/It_articles'
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="two">

      <div className="Header"> <Header /></div>
      <div className="main"><Articles /></div>
      <div className="aside"><Widget /></div>
      <div className="footer"><Footer /></div>
      <Button variant="contained">Hello world</Button>;
    </div>
  )


};




export default App;



















