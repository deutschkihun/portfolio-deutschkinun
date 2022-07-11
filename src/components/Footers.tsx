import React from "react";
import {
  Footer,
  FooterCategory,
  FooterContainer,
  FooterItem,
  Copyright,
} from "../helper/lib/Footer";

export const Footers = (): JSX.Element => {
  return (
    <Footer>
      <FooterContainer>
        <FooterItem>
          <FooterCategory>
            <h2>Menu</h2>
            <a href="/about">about</a>
            <a href="/project">project</a>
            <a href="/contact">contact</a>`
          </FooterCategory>
          <FooterCategory>
            <h2>Projects</h2>
            <a href="https://d3-react-exhibition.herokuapp.com/">
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
          </FooterCategory>
          <FooterCategory>
            <h2>Ongoing</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.npmjs.com/package/@deutschkihun/ultimate-boilerplate"
            >
              @deutschkihun/ultimate-boilerplate
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.npmjs.com/package/@deutschkihun/custom-react-component-lib"
            >
              @deutschkihun/custom-react-component-lib
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/deutschkihun/Animation3DWorld-Webpack"
            >
              Animation 3d world
            </a>
          </FooterCategory>
          <FooterCategory>
            <h2>Contact</h2>
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
          </FooterCategory>
        </FooterItem>
        <Copyright>© 2022 Deutschkihun. All rights reserved.</Copyright>
      </FooterContainer>
    </Footer>
  );
};
