import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  @keyframes stack-ani {
    from { transform: translateY()}
    to { transform: translateY(1em) scale(1.05)}
  }
  
  .stack {
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
    background-color: #151516;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    line-height: 1.75;
    width: 100%;
    max-width: 1920px;
    position: relative;
    overflow-x: hidden;
    margin: 0 auto;
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
 

  .toggle-container {
    grid-column: 11 / 12;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .toggle-container.night {
    background-color: rgba(17, 16, 34, 0.911);
  }

  .label {
    background-color: black;
    display: flex;
    height: 30px; 
    border-radius: 50px;
    width: 100px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 15px;
    transition: all .5s ease-in-out;
    cursor: pointer;
    border: 2px solid white;
  }
  .label .fa-moon {
    color: rgb(250, 250, 250);
  }
  .label .fa-sun {
    color: rgb(243, 188, 36);
  }
  .blob {
    position: absolute;
    left: 50%;
    width: 50%;
    height: 100%;
    background: rgb(169, 241, 243);
    border-radius: 50px;
    transition: .5s ease all;
  }
  .checkbox {
    opacity: 0;
    position: absolute;
  }
  .info {
    display: block;
    margin-top: 50px;
  }
  .info.night {
    color: white;
  }
  .checkbox:checked + .label .blob {
    left: 0;
  }
  .checkbox:checked + .label {
    background-color: rgb(82, 81, 83);
    border: 2px solid black;
  }
`;

export const Seperator = styled.main`
  margin-top: 150px;
  min-height: calc(100vh - 150px);
`;
