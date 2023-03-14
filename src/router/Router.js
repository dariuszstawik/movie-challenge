import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import OAutorze from "../views/o-autorze";
import Start from "../views/start";
import Zasady from "../views/zasady/Zasady";
import { routes } from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={routes.start} element={<Start />} />
        <Route path={routes.zasady} element={<Zasady />} />
        <Route path={routes.oAutorze} element={<OAutorze />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
