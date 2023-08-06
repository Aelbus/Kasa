import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error404";
import Accomodation from "./pages/accomodation";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/Accomodation/:id" element={<Accomodation />} />
      </Routes>
    </>
  );
};

export default router;
