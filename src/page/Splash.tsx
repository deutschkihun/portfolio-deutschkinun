import React from "react";
import { splashEN, splashKR } from "../assets/splash/list";

interface SplashProps {
  mode: string;
}

export const Splash = ({ mode }: SplashProps) => {
  const locale = localStorage.getItem("locale") === "kr" ? splashKR : splashEN;

  return (
    <div className={`splash ${mode}`}>
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
