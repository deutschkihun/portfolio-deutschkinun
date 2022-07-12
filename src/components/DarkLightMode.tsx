import React from "react";
import { ToggleContainer, ToggleLabel } from "../helper/lib/Toggle";

export const DarkLightMode = () => {
  const onClickModeHandler = () => {
    // const colorMode = window.localStorage.getItem("color_mode");
    // colorMode && window.document.body.classList.add(colorMode);
    // const el = document.querySelector(".dark-example-02-wrapper");
    // const isLightMode = el?.classList.contains("light");
    // if (isLightMode) {
    //   el?.classList.remove("light");
    //   el?.classList.add("dark");
    // } else {
    //   el?.classList.remove("dark");
    //   el?.classList.add("light");
    // }
    // return false;
  };

  return (
    <ToggleContainer className="menu">
      <input type="checkbox" className="checkbox" id="night-mode" />
      <ToggleLabel
        htmlFor="night-mode"
        className="label"
        onClick={() => onClickModeHandler()}
      >
        <i className="fas fa-sun" />
        <i className="fas fa-moon" />
        <div className="blob" />
      </ToggleLabel>
    </ToggleContainer>
  );
};
