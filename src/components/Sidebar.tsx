import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarItem,
  SidebarMenu,
} from "../helper/lib/Sidebar";
import { links } from "../assets/data";

export const Sidebar = (): JSX.Element => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <i
        className={`${sideBarOpen ? "fa fa-bars sidebar " : "fa fa-bars"}`}
        aria-hidden="true"
        onClick={() => setSideBarOpen(true)}
      />
      {sideBarOpen && (
        <SidebarContainer>
          <SidebarItem>
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => setSideBarOpen(false)}
            />
          </SidebarItem>
          <SidebarMenu>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </SidebarMenu>
        </SidebarContainer>
      )}
    </>
  );
};
