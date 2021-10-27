import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  z-index: 100;
  left: 0;
  top: 0;
  font-size: 20px;
`;

export const Grid = styled.div`
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-row-gap: 0px;
  padding-left: 10vw;
  padding-right: 5vw;
`;

const MenuLogo = styled.a`
  cursor: pointer;
  grid-column: 1 / span 4;
`;

const MenuContainer = styled.div`
  grid-column: 6 / span 7;
`;

const Listing = styled.li`
  text-decoration: none;
  display: inline-block;
  margin-right: 40px;
`;

const Navbar = (): JSX.Element => {
  return (
    <Header>
      <Grid>
        <MenuLogo href="/">
          <ul>
            <Listing>deutschkihun</Listing>
          </ul>
        </MenuLogo>
        <MenuContainer>
          <ul>
            <MenuLogo href="/profile">
              <Listing>About</Listing>
            </MenuLogo>
            <MenuLogo href="/work">
              <Listing>Project</Listing>
            </MenuLogo>
            <MenuLogo href="/contact">
              <Listing>Contact</Listing>
            </MenuLogo>
          </ul>
        </MenuContainer>
      </Grid>
    </Header>
  );
};

export default Navbar;
