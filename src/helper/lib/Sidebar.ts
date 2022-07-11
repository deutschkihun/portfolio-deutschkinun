import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 150px;
  width: 30%;
  height: 100%;
  background: #313336;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
`;

export const SidebarItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  font-size: 20px;
`;

export const SidebarMenu = styled.ul`
  a {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
  }
`;
