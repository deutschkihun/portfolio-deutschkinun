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

  :hover {
    cursor: pointer;
  }
`;

export const CardImg = styled.figure`
  height: 0;
  padding-bottom: 65%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: lightgray;
  background-size: cover;

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
