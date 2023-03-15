import { createGlobalStyle } from "styled-components";
import ChicagoNeon from "./ChicagoNeon.woff";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "ChicagoNeon";
    src: url(${ChicagoNeon}) format("woff");
}

html {
    box-sizing: border-box;
}

body {
width: 100vw;
height: 100vh;
font-family: "Montserrat";
border-top: 4px double black;
margin:0;
};

`;
