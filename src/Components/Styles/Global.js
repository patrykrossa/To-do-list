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
  h1 {
    margin: 32px 0;
    color: #fff;
    font-size: 24px;
  }

  .app {
    display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  background: #161a2b;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
  }

  .remove {
    margin: 20px;
    align: center;
    padding: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    background: linear-gradient(
      90deg,
      rgba(204, 40, 40, 1) 0%,
      rgba(126, 11, 37, 1) 100%
    );
    color: #fff;
    text-transform: capitalize;
  }
  
`;

export default GlobalStyles;
