import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants";

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Rubik', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  html {
    --color-violet: hsl(${COLORS.violet});
    --color-orange: hsl(${COLORS.orange});
    --color-aqua: hsl(${COLORS.aqua});
    --color-red: hsl(${COLORS.red});
    --color-green: hsl(${COLORS.green});
    --color-purple: hsl(${COLORS.purple});
    --color-yellow: hsl(${COLORS.yellow});
    --color-blue-100: hsl(${COLORS.blue[100]});
    --color-blue-200: hsl(${COLORS.blue[200]});
    --color-blue-300: hsl(${COLORS.blue[300]});
    --color-blue-400: hsl(${COLORS.blue[400]});
    --color-white: hslt(${COLORS.white});
  }
`;

export default GlobalStyles;
