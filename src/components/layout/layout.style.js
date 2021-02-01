import styled from 'styled-components';


export const LayoutWrapper = styled.div``;

export const HeaderWrapper = styled.header`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border-width: .5rem 0 0;
  border-style: solid;
  color: #baaec4;
  border-image: linear-gradient(to right,#d367c1 10%,#dedf40 25%,#62cb5c 50%,#00bbcb 75%,#ab79d6 90%) 1;
`;

export const Nav = styled.nav`
  display: grid;
  place-items: center;

  @keyframes gradient {
    0% {
      background-position: 0
    }
    to {
      background-position: 100%
    }
  }

  a {
    position: relative;
    font-family: Kanit,serif;
    font-weight: 800;
    color: #212125;
    font-size: 3rem;
    line-height: 1;
    text-decoration: none;

    :before {
      background-color: #212125;
      transform: rotate(45deg) translateX(-20%);
      content: "";
      position: absolute;
      padding: 70%;
      z-index: -1;
      top: -50%;
      padding: 140%;
      animation: gradient 15s linear infinite;
      animation-direction: alternate;
      transform: rotate(45deg) translateX(-45%);
      border: 2px solid #212125;
      background: linear-gradient(to right,#d367c1 10%,#dedf40 25%,#62cb5c 50%,#00bbcb 75%,#ab79d6 90%);
      background-size: 1000% 100%;
    }

    :focus:before {
      box-shadow: 0 0 0 4px #d367c1;
    }
  }
`;
