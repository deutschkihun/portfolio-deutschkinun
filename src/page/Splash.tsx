import React from "react";
import { splashEN, splashKR } from "../assets/splash/list";

export const Splash = () => {
  const locale = localStorage.getItem("locale") === "kr" ? splashKR : splashEN;

  return (
    <div className="splash">
      <div className="waviy">
        {locale.split("").map((m, k) => (
          <span key={k} style={{ "--i": k + 1 }}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
};
