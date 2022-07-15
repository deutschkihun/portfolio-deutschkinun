import styled from "styled-components";

export const SidebarContainer = styled.div`
  .open-sidebar {
    transform: translateX(0px);
  }

  .close-sidebar {
    transform: translateX(-300px);
  }

  #sidebar-list {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const SidebarList = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  min-width: 150px;
  height: 100%;
  background: #6f7378;
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
