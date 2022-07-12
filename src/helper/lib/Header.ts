import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background-color: #151516;
  padding: 16px 0;
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  font-size: 14px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(10px, auto);
  grid-gap: 10px;
  place-items: center center;
  color: white;

  .fa-bars {
    display: none;
  }

  .fa-search,
  .fa-times {
    font-size: 20px;
    display: grid;
    grid-column: 12 / 13;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    .fa-bars {
      padding-left: 1rem;
      font-size: 20px;
      display: flex;
    }
    .fa-search,
    .fa-times {
      padding-right: 1rem;
    }
  }

  .menu {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

export const HomeComponent = styled(Link)`
  grid-column: 1 / 3;
`;

export const AboutComponent = styled(Link)`
  grid-column: 9 / 10;
`;

export const ProjectComponent = styled(Link)`
  grid-column: 10 / 11;
`;

export const ContactComponent = styled(Link)`
  grid-column: 11 / 12;
`;
