import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "../router/Router";
import { GlobalStyle } from "../StyledComponents/GlobalStyle";
import { theme } from "../StyledComponents/theme";

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default Root;
