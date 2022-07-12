import React from "react";
import { ToggleContainer, ToggleLabel } from "../helper/lib/Toggle";

export const DarkLightMode = () => {
  return (
    <ToggleContainer>
      <input type="checkbox" className="checkbox" id="night-mode" />
      <ToggleLabel htmlFor="night-mode" className="label">
        <i className="fas fa-moon" />
        <i className="fas fa-sun" />
        <div className="blob" />
      </ToggleLabel>
    </ToggleContainer>
  );
};
