import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
import ComponentRenderer from "ComponentRenderer.js";
import ThankYouPage from "ThankYouPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/" element={<RestaurantLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}