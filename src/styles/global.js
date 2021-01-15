import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ProximaNova;
    font-weight: 200;
    font-display: swap;
    src: url('/assets/fonts/ProximaNova-Thin.otf');
  }
  @font-face {
    font-family: ProximaNova;
    font-weight: 400;
    font-display: swap;
    src: url('/assets/fonts/ProximaNova-Regular.otf');
  }
  @font-face {
    font-family: ProximaNova;
    font-weight: 500;
    font-display: swap;
    src: url('/assets/fonts/ProximaNova-Bold.otf');
  }
  @font-face {
    font-family: ProximaNova;
    font-weight: bold;
    font-display: swap;
    src: url('/assets/fonts/ProximaNova-Bold.otf');
  }
  @font-face {
    font-family: ProximaNova;
    font-weight: 600;
    font-display: swap;
    src: url('/assets/fonts/ProximaNova-Extrabold.otf');
  }
  @font-face {
    font-family: ProximaNova;
    font-weight: 800;
    font-display: swap;
    src: url('/assets/fonts/ProximaNova-Black.otf');
  }

  body {
    font-family: ProximaNova, sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  textarea, input, a {
    font-family: ProximaNova, sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
