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

  @font-face {
    font-family: Kanit;
    font-weight: 200;
    font-display: swap;
    src: url('/assets/fonts/Kanit-Thin.ttf');
  }
  @font-face {
    font-family: Kanit;
    font-weight: 400;
    font-display: swap;
    src: url('/assets/fonts/Kanit-Regular.ttf');
  }
  @font-face {
    font-family: Kanit;
    font-weight: 500;
    font-display: swap;
    src: url('/assets/fonts/Kanit-Bold.ttf');
  }
  @font-face {
    font-family: Kanit;
    font-weight: bold;
    font-display: swap;
    src: url('/assets/fonts/Kanit-Bold.ttf');
  }
  @font-face {
    font-family: Kanit;
    font-weight: 600;
    font-display: swap;
    src: url('/assets/fonts/Kanit-Extrabold.ttf');
  }
  @font-face {
    font-family: Kanit;
    font-weight: 800;
    font-display: swap;
    src: url('/assets/fonts/Kanit-Black.ttf');
  }

  body {
    background-color: #27272c;
    font-family: ProximaNova, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    overflow-x: hidden;
  }

  textarea, input, a {
    font-family: ProximaNova, sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Kanit,Arial Bold,Arial,sans-serif;
  }
`;
