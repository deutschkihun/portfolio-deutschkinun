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
import { FormattedMessage } from "react-intl";

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
          <DarkLightMode />
          <Languages />
          <AboutComponent className="menu" to="/about">
            <FormattedMessage id="About" />
          </AboutComponent>
          <ProjectComponent className="menu" to="/project">
            <FormattedMessage id="Projects" />
          </ProjectComponent>
          <ContactComponent className="menu" to="/contact">
            <FormattedMessage id="Contact" />
          </ContactComponent>
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
      <Search active={active} />
    </>
  );
};
