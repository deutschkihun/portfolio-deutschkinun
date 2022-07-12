import React, { useState } from "react";
import {
  SidebarList,
  SidebarContainer,
  SidebarItem,
  SidebarMenu,
} from "../helper/lib/Sidebar";
import { FormattedMessage } from "react-intl";

export const Sidebar = (): JSX.Element => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  return (
    <SidebarContainer>
      <i
        className={`${sideBarOpen ? "fa fa-bars sidebar " : "fa fa-bars"}`}
        aria-hidden="true"
        onClick={() => setSideBarOpen(true)}
      />
      <SidebarList
        id="sidebar-list"
        className={`${sideBarOpen ? "open-sidebar " : "close-sidebar"}`}
      >
        <SidebarItem>
          <i
            className="fa fa-times sidebar"
            aria-hidden="true"
            onClick={() => setSideBarOpen(false)}
          />
        </SidebarItem>
        <SidebarMenu>
          <li>
            <a href="/">
              <FormattedMessage id="Home" />
            </a>
          </li>
          <li>
            <a href="/about">
              <FormattedMessage id="About" />
            </a>
          </li>
          <li>
            <a href="/project">
              <FormattedMessage id="Projects" />
            </a>
          </li>
          <li>
            <a href="/contact">
              <FormattedMessage id="Contact" />
            </a>
          </li>
        </SidebarMenu>
      </SidebarList>
    </SidebarContainer>
  );
};
