import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/principalView.jsx";
import { Planet } from "./views/planet.jsx";
import { Character } from "./views/character.jsx";
import { Vehicle } from "./views/vehicle.jsx";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planets/:id" element={<Planet />} />
            <Route path="/people/:id" element={<Character />} />
            <Route path="/vehicles/:id" element={<Vehicle />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
