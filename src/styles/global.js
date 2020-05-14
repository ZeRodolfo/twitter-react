import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: rgb(245, 248, 250);
  }

  button {
    cursor: pointer;
  }

  p, span, a {
    color: rgb(101, 119, 134);
  }

  @media print{
    *{
      box-shadow: none !important;
    }
  }
`;
