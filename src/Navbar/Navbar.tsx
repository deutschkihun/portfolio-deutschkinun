import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  @media (min-width: 783px) {
    .toggle-btn {
      display: none;
    }
  }

  @media (max-width: 782px) {
    .logo-toggle,
    .menu-toggle {
      display: none;
    }
    .toggle-btn {
      grid-column: 4 / 8;
    }
  }
`;

const MenuLogo = styled.a`
  cursor: pointer;
  grid-column: 2 / 5;
`;

const MenuContainer = styled.div`
  grid-column: 6 / 11;
`;

const Listing = styled.li`
  text-decoration: none;
  display: inline-block;
  margin-right: 40px;
`;

const ToggleButton = styled.div``;

export const Navbar = (): JSX.Element => {
  return (
    <Header>
      <Grid>
        <MenuLogo href="/" className="logo-toggle">
          <ul>
            <Listing>deutschkihun</Listing>
          </ul>
        </MenuLogo>
        <MenuContainer className="menu-toggle">
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
        <ToggleButton className="toggle-btn">
          <div className="dropdown">
            <div
              className="btn-secondary dropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ cursor: "pointer", textAlign: "center" }}
            >
              Menu Bar
            </div>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{ textAlign: "center", position: "unset", float: "none" }}
            >
              <Link className="dropdown-item" to="/">
                Home
              </Link>
              <br />
              <Link className="dropdown-item" to="/profile">
                About
              </Link>
              <br />
              <Link className="dropdown-item" to="/work">
                Project
              </Link>
              <br />
              <Link className="dropdown-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </ToggleButton>
      </Grid>
    </Header>
  );
};
