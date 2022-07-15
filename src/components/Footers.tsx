import React from "react";
import { FormattedMessage } from "react-intl";
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
            <h2>
              <FormattedMessage id="Menu" />
            </h2>
            <a href="/about">
              <FormattedMessage id="About" />
            </a>
            <a href="/project">
              <FormattedMessage id="Projects" />
            </a>
            <a href="/contact">
              <FormattedMessage id="Contact" />
            </a>
          </FooterCategory>
          <FooterCategory>
            <h2>
              <FormattedMessage id="MyApp" />
            </h2>
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
            <h2>
              <FormattedMessage id="Ongoing" />
            </h2>
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
              href="https://github.com/deutschkihun/webgl-animation"
            >
              Animation 3d world
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/deutschkihun/portfolio"
            >
              @deutschkihun/portfolio
            </a>
          </FooterCategory>
          <FooterCategory>
            <h2>
              <FormattedMessage id="Contact" />
            </h2>
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
        <Copyright>
          <FormattedMessage id="Copyright" />
        </Copyright>
      </FooterContainer>
    </Footer>
  );
};
