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
