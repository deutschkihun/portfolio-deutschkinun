import React from "react";
import { Footer } from "../helper/lib";

export const Footers = (): JSX.Element => {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="footer-category">
            <h2>Shortcut menu</h2>
            <a href="/about">about</a>
            <a href="/project">project</a>
            <a href="/contact">contact</a>
          </div>
          <div className="footer-category">
            <h2>My projects</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://d3-react-exhibition.herokuapp.com/"
            >
              D3 react exihibition
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://luxeschmuck.herokuapp.com/"
            >
              Luxe schmuck
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://login-boilerplate-deutschkihun.herokuapp.com/"
            >
              Login boilerplate
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://sportdbapp-deutschkihun.herokuapp.com/"
            >
              Sport db app
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://queryapi-deutschkihun.herokuapp.com/"
            >
              Query api
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://onlineshop-baseline-api.herokuapp.com/"
            >
              Baseline api
            </a>
          </div>
          <div className="footer-category">
            <h2>Comming soon projects</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/deutschkihun/Animation3DWorld-Webpack"
            >
              Animation 3d world
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/deutschkihun/ringle-google-calender"
            >
              Calender app
            </a>
          </div>
          <div className="footer-category">
            <h2>Social network</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/deutschkihun"
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kihun-kim-b35b73174/"
            >
              Linkedin
            </a>
          </div>
        </div>
        <p style={{ margin: "1.5rem 0" }}>
          © 2022 Deutschkihun. All rights reserved.
        </p>
      </div>
    </Footer>
  );
};
