import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownContainer,
} from "../helper/lib/Dropdown";
import korea from "../assets/flag/kr.svg";
import us from "../assets/flag/us.svg";
import { useLocation } from "react-router-dom";

export const Languages = () => {
  const { pathname } = useLocation();
  return (
    <Dropdown>
      <DropdownContainer>
        <img src={pathname.substr(1, 2) === "kr" ? korea : us} alt="flag" />
        {pathname.substr(1, 2) === "kr" ? `Korean` : `English`}
        <DropdownItem>
          <li>
            <a href="/kr">
              <img src={korea} alt="korea" />
              Korean
            </a>
          </li>
          <li>
            <a href="/">
              <img src={us} alt="korea" />
              English
            </a>
          </li>
        </DropdownItem>
      </DropdownContainer>
    </Dropdown>
  );
};
