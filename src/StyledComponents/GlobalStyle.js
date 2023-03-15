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
/* background-color: #675a55; */
/* background-color: lightgray; */
/* background-color: black; */
margin:0;
};

h1{
font-family: "ChicagoNeon";
font-style: normal;
font-weight: normal;
font-size: 50px;
margin-top: 5%;
margin-bottom: 1%;
letter-spacing: 3px;
text-align: "left";
}
`;
