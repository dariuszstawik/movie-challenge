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
overflow-x: hidden;
min-height: 120vh;
max-height: 180vh;
@media(min-width: ${({ theme }) => theme.media.desktopLarge}) {
    height: 100vh;
} 
font-family: "Montserrat";
font-size: 15px;
margin:0;
};

`;
