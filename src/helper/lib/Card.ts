import styled from "styled-components";

export const CardContainer = styled.section`
  padding: 1rem;
  max-width: 70vw;
  margin: auto;
`;

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  column-gap: 2%;
`;

export const CardItem = styled.li`
  margin-bottom: 2rem;
  background: white;
`;

export const CardImg = styled.figure`
  height: 0;
  padding-bottom: 65%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: lightgray;
  background-size: cover;

  :hover {
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    transform: scale(1.2);
    z-index: 2;
  }

  img {
    display: none;
  }
`;

export const CardDesc = styled.div`
  padding: 1em;
  color: black;
`;

export const CardTitle = styled.strong`
  border-bottom: 1px solid black;
`;
