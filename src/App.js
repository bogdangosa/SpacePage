import React from "react";
import {AnimatePresence,motion} from 'framer-motion'
import Home from "./components/pages/Home/Home";
import Crew from "./components/pages/Crew/Crew";
import Destionation from "./components/pages/Destination/Destionation";
import Technology from "./components/pages/Technology/Technology";
import Navigation from "./components/navigation/Navigation";
import {Routes,Route,useLocation} from 'react-router-dom'
import './App.css'

function App() {
  const location = useLocation();
  return (
      <div className="App">
        <Navigation/>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}/>
            <Route path="/Destination" element={<Destionation />}/>
            <Route path="/Crew" element={<Crew />}/>
            <Route path="/Technology" element={<Technology />}/>
          </Routes>
        </AnimatePresence>
      </div>
  );
}

export default App;
