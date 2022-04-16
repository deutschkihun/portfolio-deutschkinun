import React from "react";
import { Dropdown } from "../helper/lib";
import korea from "../assets/kr.svg";
import usa from "../assets/um.svg";
import { useLocation } from "react-router-dom";

export const DropdownComponent = (): JSX.Element => {
  const { pathname } = useLocation();
  console.log(pathname.substr(1, 2));
  return (
    <Dropdown>
      <li className="dropdown">
        {pathname.substr(1, 2) === "kr" ? (
          <>
            <img src={korea} alt="korean" />
            <>Korean</>
          </>
        ) : (
          <>
            <img src={usa} alt="usa" />
            <>English</>
          </>
        )}
        <ul className="dropdown_menu">
          <li>
            <a href="/kr">
              <img src={korea} alt="korea" />
              Korean
            </a>
          </li>
          <li>
            <a href="/">
              <img src={usa} alt="korea" />
              English
            </a>
          </li>
        </ul>
      </li>
    </Dropdown>
  );
};
