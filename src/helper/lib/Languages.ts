import styled from "styled-components";

export const LanguagesContainer = styled.form`
  font-size: 14px;
  grid-column: 7 / 9;
  color: white;

  img {
    width: 15px;
    margin: 2px;
  }

  button {
    margin: 0 1rem;
    background: #0d6efd;
    border-radius: 8px;
    cursor: pointer;
    color: #fff;
    border: none;
    padding: 5px;
    width: 50px;
  }
`;

export const LanguageMessage = styled.div`
  grid-column: 4 / 7;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
