import React from "react";
import Home from "./components/pages/Home/Home";
import Crew from "./components/pages/Crew/Crew";
import Destionation from "./components/pages/Destination/Destionation";
import Technology from "./components/pages/Technology/Technology";
import Navigation from "./components/navigation/Navigation";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Destination" element={<Destionation />}/>
          <Route path="/Crew" element={<Crew />}/>
          <Route path="/Technology" element={<Technology />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
