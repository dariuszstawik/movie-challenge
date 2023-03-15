import React from "react";
import Router from "../router/Router";
import { GlobalStyle } from "../StyledComponents/GlobalStyle";

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default Root;
