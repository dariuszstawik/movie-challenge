import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Container from "../components/atoms/Container";
import ContentBox from "../components/atoms/ContentBox";
import Navbar from "../components/organisms/Navbar";
import Kategoria from "../views/kategoria/kategoria";
import OAutorze from "../views/o-autorze";
import Start from "../views/start";
import Statystyki from "../views/statystyki/Statystyki";
import Zasady from "../views/zasady/Zasady";
import { routes } from "./routes";

const Router = () => {
  return (
    <HashRouter>
      <Container>
        <Navbar />
        <ContentBox>
          <Routes>
            <Route exact path={routes.start} element={<Start />} />
            <Route path={routes.statystyki} element={<Statystyki />} />
            <Route path={routes.zasady} element={<Zasady />} />
            <Route path={routes.kategoria} element={<Kategoria />} />
            <Route path={routes.oAutorze} element={<OAutorze />} />
          </Routes>
        </ContentBox>
      </Container>
    </HashRouter>
  );
};

export default Router;
