import React from "react";
import { ToggleContainer, ToggleLabel } from "../helper/lib/Toggle";

export const DarkLightMode = () => {
  const onClickModeHandler = () => {
    const currentMode = window.localStorage.getItem("mode");
    const colorMode = currentMode === "dark-mode" ? "light-mode" : "dark-mode";
    if (colorMode) {
      window.document.body.classList.remove(currentMode as string);
      window.document.body.classList.add(colorMode);
    }
    window.localStorage.setItem("mode", colorMode);
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
