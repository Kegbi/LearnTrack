import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    font-size: 14px;
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Segoe UI", "Ubuntu", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }
  
  h1 {
    font-size: 2rem;
  }
`;

export const black = "black";
export const white = "white";
export const grey = "grey";
export const grey_dark = "#343434";
export const green = "#1fac1f";
export const red = "#e02b2b";
export const yellow = "#f1c900";
