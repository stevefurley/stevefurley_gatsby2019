import { createGlobalStyle } from "styled-components"

const colors = {
  primaryColor: "#F4A7BA",
  primaryColorDark: "#AA7582",
  primaryColorLight: "#f4a7e1",
  secondaryColor: "#000",
  tertiaryColor: "#282828",
}

const GlobalStyle = createGlobalStyle`
    // @import url('https://fonts.googleapis.com/css?family=Raleway:200,400,700');

    // *,
    // *::before,
    // *::after { 
    //     margin: 0;
    //     padding: 0;
    //     box-sizing: inherit;
    // }
    // html {
    //     font-size: 62.5%;
    //     box-sizing: border-box;

    //     @media (max-width: 1024px){
    //       font-size: 50%;
    //     }

    //     @media (max-width: 767px) {
    //       font-size: 42.5%;
    //     }
    // }
    // body {
    //     font-family: 'Raleway', sans-serif;
    //     color: ${colors.tertiaryColor};
    // }
    // .wrapper {
    //   max-width: 800px;
    //   margin: auto;
    //   background: red;
    // }
`

export { colors, GlobalStyle }
