import React, { useState } from "react";
import {
  AboutComponent,
  ContactComponent,
  HeaderContainer,
  HeaderComponent,
  HomeComponent,
  ProjectComponent,
} from "../helper/lib/Header";
import { Languages } from "./Languages";
import { Search } from "./Search";
import { Sidebar } from "./Sidebar";
import { DarkLightMode } from "./DarkLightMode";

export const Header = (): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const toggleEvent = () => {
    setActive(!active);
  };

  return (
    <>
      <HeaderComponent>
        <HeaderContainer>
          <Sidebar />
          <HomeComponent to="/">deutschkihun</HomeComponent>
          <Languages />
          <AboutComponent className="menu" to="/about">
            About
          </AboutComponent>
          <ProjectComponent className="menu" to="/project">
            Project
          </ProjectComponent>
          <ContactComponent className="menu" to="/contact">
            Contact
          </ContactComponent>
          <DarkLightMode />
          {active ? (
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={toggleEvent}
            />
          ) : (
            <i
              className="fa fa-search"
              aria-hidden="true"
              onClick={toggleEvent}
            />
          )}
        </HeaderContainer>
      </HeaderComponent>
      {active && <Search />}
    </>
  );
};
