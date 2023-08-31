import { useState } from "react";
import Design from "./pages/Design";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ModernistPoster from "./components/designs//modernist_poster/ModernistPoster";
import BostonInfographic from "./components/designs/boston_infographic/BostonInfographic";
import BostonDogMagazine from "./components/designs/boston_dynamic_magazine/BostonDynamicMagazine";
import DonInfographic from "./components/designs/don_infographic/DonInfographic";
import DonJazzPoster from "./components/designs/don_jazz_poster/DonJazzPoster";
import TypeTheater from "./components/designs/type_theater/TypeTheater";
import TypeBook from "./components/designs/type_book/TypeBook";
import NavigationBar from "./components/NavigationBar";
import Illustrations from "./pages/Illustrations";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <>
      <NavigationBar/>
      <Router>
        <Routes>
            <Route exact path="/" element={<Design/>} />
            <Route path="/modernist-poster" element={<ModernistPoster/>} />
            <Route path="/boston-infographic" element={<BostonInfographic/>} />
            <Route path="/boston-dog-magazine" element={<BostonDogMagazine/>} />
            <Route path="/don-infographic" element={<DonInfographic/>} />
            <Route path="/don-jazz-poster" element={<DonJazzPoster/>} />
            <Route path="/type-theater" element={<TypeTheater/>} />
            <Route path="/type-book" element={<TypeBook/>} />
            <Route path="/about-me" element={<AboutMe/>} />
            

            <Route path="/illustrations" element={<Illustrations/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
