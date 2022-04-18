import React, { useState } from "react";
import {
  About,
  Contact,
  Grid,
  Header,
  Home,
  KeywordForm,
  Overlay,
  Project,
  SearchContainer,
  SearchContainerWrap,
  SearchForm,
  Input,
} from "../helper/lib";
import SidebarComponent from "./SidebarComponent";
import { DropdownComponent } from "./DropdownComponent";
import search from "../assets/search.svg";
import close from "../assets/close.svg";

export const Headers = (): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const toggleEvent = () => {
    setActive(!active);
  };

  return (
    <>
      <Header>
        <Grid>
          <SidebarComponent />
          <Home to="/">Deutschkihun</Home>
          <DropdownComponent />
          <About to="/about">About</About>
          <Project to="/project">Project</Project>
          <Contact to="/contact">Contact</Contact>
          <img
            src={close}
            alt="close"
            onClick={toggleEvent}
            className={`${active ? "fa-times" : "inactive"}`}
          />
          <img
            onClick={toggleEvent}
            src={search}
            className={`${active ? "inactive" : "fa-search"}`}
            alt="search"
          />
        </Grid>
      </Header>
      {active && (
        <SearchContainer>
          <SearchContainerWrap>
            <div className="container">
              <SearchForm>
                <Input
                  placeholder="Search box"
                  style={{ paddingLeft: "48px" }}
                />
                <img src={search} alt="search" className="input-search-icon" />
              </SearchForm>
              <KeywordForm>
                <span>
                  <a href="/">keyword</a>
                </span>
                <span>
                  <a href="/">deutschkihun</a>
                </span>
              </KeywordForm>
            </div>
          </SearchContainerWrap>
          <Overlay />
        </SearchContainer>
      )}
    </>
  );
};
