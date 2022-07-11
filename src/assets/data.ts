import visualization from "./visualization.svg";

import data from "./data.svg";
import language from "./language.svg";
import coding from "./coding.svg";
import learning from "./learning.svg";

import sport from "./thumbnail/sport.svg";
import login from "./thumbnail/login.svg";
import accessory from "./thumbnail/accessory.svg";
import packagebox from "./thumbnail/packagebox.svg";
import template from "./thumbnail/template.svg";

import ts from "./stack/ts.svg";
import js from "./stack/js.svg";
import react from "./stack/react.svg";
import redux from "./stack/redux.svg";
import node from "./stack/node.svg";
import mongo from "./stack/mongo.svg";
import d3 from "./stack/d3.svg";
import threejs from "./stack/threejs.svg";
import pgsql from "./stack/pgsql.svg";
import html from "./stack/html.svg";
import css from "./stack/css.svg";
import sc from "./stack/sc.svg";
import git from "./stack/git.svg";
import github from "./stack/github.svg";
import docker from "./stack/docker.svg";
import heroku from "./stack/heroku.svg";
import netlify from "./stack/netlify.svg";

import kr from "./flag/kr.svg";
import us from "./flag/us.svg";
import de from "./flag/de.svg";

export const links = [
  {
    id: 0,
    url: "/",
    text: "Home",
  },
  {
    id: 1,
    url: "/about",
    text: "about",
  },
  {
    id: 2,
    url: "/project",
    text: "project",
  },
  {
    id: 2,
    url: "/contact",
    text: "contact",
  },
];

export const HomeText = {
  title: "Hi, I'm",
  name: "Kihun Kim",
  question1: "Who am I ?",
  answer1:
    "I am not just only writing a code, but also tries to find the best reasonable solution for business problems. I think about data, visualize them in many different ways. Currently junior software engineer, doing frontend development at PACE Telematics in Germany.",
  question2: "What makes me unique?",
  answer2:
    "I really enjoy learning new things and am constantly seeking out new learning opportunities. When solving problems, I try to consider not only technical details, but also business aspects",
  question3: "Key skills",
  answer3: [
    {
      title: "Professional frontend field experience",
      img: coding,
    },
    {
      title: "Proficient english / german skills",
      img: language,
    },
    {
      title: "WebGL & data visualization (d3.js, three.js)",
      img: data,
    },
    {
      title: "Fast learning curve with unfamiliar libraries or packages",
      img: learning,
    },
  ],
};

export const AboutText = {
  ExperienceTitle: "Professional field experiences",
  ExperienceDescription: [
    {
      timerange: "July 2021 – May 2022",
      location: "Karlsruhe, Germany",
      company: "PACE Telematics (Connected Fueling Team)",
      role: "Junior Frontend Engineer / Full-time",
      description:
        "Progressive web app(PWA) & web app for Pace Drive mobile application",
    },
    {
      timerange: "December 2020 – May 2021",
      location: "Heidelberg, Germany",
      company: "Vayu Software (Core Development Team)",
      role: "Junior Fullstack Engineer/ full-time, internship",
      description: "Low code platform development",
    },
  ],
  CompetenceTitle: "Coding skills",
  CompetenceDescription: [
    {
      name: "javascript",
      img: js,
    },
    {
      name: "typescript",
      img: ts,
    },
    {
      name: "react",
      img: react,
    },
    {
      name: "redux",
      img: redux,
    },
    {
      name: "node",
      img: node,
    },
    {
      name: "mongo",
      img: mongo,
    },
    {
      name: "d3",
      img: d3,
    },
    {
      name: "threejs",
      img: threejs,
    },
    {
      name: "pgsql",
      img: pgsql,
    },
    {
      name: "html",
      img: html,
    },
    {
      name: "css",
      img: css,
    },
    {
      name: "sc",
      img: sc,
    },
    {
      name: "git",
      img: git,
    },
    {
      name: "github",
      img: github,
    },
    {
      name: "docker",
      img: docker,
    },
    {
      name: "netlify",
      img: netlify,
    },
    {
      name: "heroku",
      img: heroku,
    },
  ],
  LanguageTitle: "Languages",
  LanguageDescription: [
    {
      name: "한국어 (native)",
      img: kr,
    },
    {
      name: "english (proficient)",
      img: us,
    },
    {
      name: "deutsch (verhandlungssicher)",
      img: de,
    },
  ],
};

export const ProjectText = {
  projectTitle: "project list",
  projectDescription: [
    {
      title: "D3 React exhibition",
      description:
        "Providing various visualization technologies such as line chart, bar chart, svg, and interactive chart using react and d3.js",
      link: "https://d3-react-exhibition.herokuapp.com/",
      img: visualization,
    },
    {
      title: "LUXE SCHMUCK",
      description:
        "Luxeschmuck is a comprehensive e-commerce platform that sells luxury products developed by typescript and react.",
      link: "https://luxeschmuck.herokuapp.com/",
      img: accessory,
    },
    {
      title: "@deutschkihun/ultimate-boilerplate",
      description:
        "template that contains essential functions required to start a project based on react, typescript, and webpack.This template is published in the npm package.",
      link: "https://www.npmjs.com/package/@deutschkihun/ultimate-boilerplate",
      img: packagebox,
    },
    {
      title: "@deutschkihun/custom-react-component-lib",
      description:
        "custom component library based on deutschkihun's react, typesctipt, and rollup. Project started to use different ui or avoid inconsistent design each time project. Flexible communication with product designer is possible through storybook",
      link: "https://www.npmjs.com/package/@deutschkihun/custom-react-component-lib",
      img: template,
    },

    {
      title: "Login System Boilerplate",
      description:
        "Design of a generic login system boilplate for web application that provides login & out, ID & PW finding, information modification",
      link: "https://login-boilerplate-deutschkihun.herokuapp.com/",
      img: login,
    },
    {
      title: "Sport DB Application",
      description:
        "Getting real-time updated sports teams and players information around the world, providing real-time results of the competition and highlights videos ",
      link: "https://sportdbapp-deutschkihun.herokuapp.com/",
      img: sport,
    },
  ],
};
