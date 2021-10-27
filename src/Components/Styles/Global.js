import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  }
  body {
    background: linear-gradient(
    90deg,
    rgba(204, 40, 40, 1) 0%,
      rgba(126, 11, 37, 1) 100%
  );
  }
`;

export default GlobalStyles;
