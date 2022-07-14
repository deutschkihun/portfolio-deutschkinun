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
  border: 1px solid;
`;

export const CardImg = styled.img`
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid;

  :hover {
    cursor: pointer;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    transform: scale(1.2);
    border-bottom: none;
  }
`;

export const CardDesc = styled.div`
  padding: 1em;
`;

export const CardTitle = styled.strong`
  border-bottom: 1px solid;
`;
