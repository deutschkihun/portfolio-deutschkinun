import React, { useState } from "react";
import { links } from "../assets/data";
import list from "../assets/list.svg";
import close from "../assets/close.svg";
import { Sidebar } from "../helper/lib";

const SidebarComponent = (): JSX.Element => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <img
        src={list}
        onClick={() => setSideBarOpen(!sideBarOpen)}
        className="fa-bars"
        alt="list"
      />
      {sideBarOpen && (
        <Sidebar>
          <div className="sidebar-header">
            <img
              src={close}
              onClick={() => setSideBarOpen(!sideBarOpen)}
              className="fa-times"
              alt="close"
            />
          </div>
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </Sidebar>
      )}
    </>
  );
};

export default SidebarComponent;
