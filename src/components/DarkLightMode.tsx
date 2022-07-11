import React from "react";

export const DarkLightMode = () => {
  return (
    <div className="menu toggle-container night-mode-available">
      <div className="night-mode-button">
        <input type="checkbox" className="checkbox" id="night-mode" />
        <label htmlFor="night-mode" className="label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div className="blob"></div>
        </label>
      </div>
    </div>
  );
};
