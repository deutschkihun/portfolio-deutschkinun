import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  @keyframes stack-ani {
    from { transform: translateY()}
    to { transform: translateY(1em) scale(1)}
  }
  
  .stack-icon {

    :nth-child(1) {
      animation: stack-ani 1s alternate infinite 0s;
    }

    :nth-child(2) {
      animation: stack-ani 1s alternate infinite 0.5s;
    }

    :nth-child(3) {
      animation: stack-ani 1s alternate infinite 1s;
    }

    :nth-child(4) {
      animation: stack-ani 1s alternate infinite 1.5s;
    }

    :nth-child(5) {
      animation: stack-ani 1s alternate infinite 2s;
    }

    :nth-child(6) {
      animation: stack-ani 1s alternate infinite 2.5s;
    }

    :nth-child(7) {
      animation: stack-ani 1s alternate infinite 3s;
    }

    :nth-child(8) {
      animation: stack-ani 1s alternate infinite 3.5s;
    }

    :nth-child(9) {
      animation: stack-ani 1s alternate infinite 4s;
    }

    :nth-child(10) {
      animation: stack-ani 1s alternate infinite 4.5s;
    }

    :nth-child(11) {
      animation: stack-ani 1s alternate infinite 5s;
    }

    :nth-child(12) {
      animation: stack-ani 1s alternate infinite 5.5s;
    }

    :nth-child(13) {
      animation: stack-ani 1s alternate infinite 6s;
    }

    :nth-child(14) {
      animation: stack-ani 1s alternate infinite 6.5s;
    }

    :nth-child(15) {
      animation: stack-ani 1s alternate infinite 7s;
    }

    :nth-child(16) {
      animation: stack-ani 1s alternate infinite 7.5s;
    }

    :nth-child(17) {
      animation: stack-ani 1s alternate infinite 8s;
    }

    :hover {
      animation-play-state: paused;
    }
  }


  body {
    background-color: rgba(17, 16, 34, 0.911);
    color: #fff;
    font-family: "Montserrat", sans-serif;
    line-height: 1.75;
    width: 100%;
    max-width: 1920px;
    position: relative;
    overflow-x: hidden;
    margin: 0 auto;
  }

  body.light-mode {
    background-color: #FFFAFA;
    color: #151516;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }
  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }

  .reveal.active {
    opacity: 1;
  }
  .active.fade-bottom {
    animation: fade-bottom 1.5s ease-in; 
  }

  @keyframes fade-bottom {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
