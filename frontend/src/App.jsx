<<<<<<< HEAD
import "./App.css";
import Header from "./components/Header/header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/Footer/footer";
import Articles from "./components/Articles/It_articles";
=======
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import Home_Page from './pages/Home_Page'
import IT_Page from './pages/IT_Page'
import Business_Page from './pages/Business_Page'
import Edu_Page from './pages/Edu_Page'
import RootLayout from './Routes/RootLayout'
>>>>>>> 6b232827ae790cb142d3b70f793b88eeb63cff2c



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home_Page />} />
        <Route path='IT' element={<IT_Page />} />
        <Route path='Business' element={<Business_Page />} />
        <Route path='Edu' element={<Edu_Page />} />

      </Route>
    )
  )
  return (
<<<<<<< HEAD
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
=======
    <RouterProvider router={router} />
  )
};


export default App;









>>>>>>> 6b232827ae790cb142d3b70f793b88eeb63cff2c
