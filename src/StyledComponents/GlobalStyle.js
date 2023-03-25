import { createGlobalStyle } from "styled-components";
import ChicagoNeon from "./ChicagoNeon.woff";
import charlieChaplinImg from "./charlie-chaplin.png";

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
overflow: hidden;
height: 100vh;
font-family: "Montserrat";
font-size: 15px;
margin:0;
};

`;
