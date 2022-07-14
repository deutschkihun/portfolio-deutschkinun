import styled from "styled-components";

export const ToggleContainer = styled.div`
  grid-column: 3 / 4;
  max-height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .checkbox:checked + .label .blob {
    left: 0;
  }
  .checkbox:checked + .label {
    background-color: black;
  }

  .blob {
    position: absolute;
    left: 50%;
    width: 50%;
    height: 100%;
    background: rgb(169, 241, 243);
    border-radius: 50px;
    transition: 0.5s ease all;
  }
`;

export const ToggleLabel = styled.label`
  background-color: #6f7378;
  display: flex;
  height: 40px;
  border-radius: 50px;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 15px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  border: 2px solid black;

  .fa-moon {
    color: rgb(250, 250, 250);
  }

  .fa-sun {
    color: rgb(243, 188, 36);
  }
`;
