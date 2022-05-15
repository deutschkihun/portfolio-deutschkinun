import visualization from "./visualization.svg";
import sport from "./sport.svg";
import furnace from "./furnace.svg";
import preferences from "./preferences.svg";
import login from "./login.svg";
import api from "./api.svg";
import accessory from "./accessory.svg";
import baseline from "./baseline.svg";
import data from "./data.svg";
import language from "./language.svg";
import coding from "./coding.svg";

export const links = [
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
    id: 3,
    url: "/contact",
    text: "contact",
  },
];

export const landingPageText = {
  title: "Hi, I'm",
  name: "Kihun Kim",
  question1: "Who am I ?",
  answer1:
    "I am not just only a write code, but also tries to find the best reasonable solution for business problems. I think about data, visualize them in many different ways. Currently junior software engineer, doing frontend development at PACE Telematics in Germany.",
  question2: "What Makes Me Unique?",
  answer2:
    "I really enjoy learning new things and am constantly seeking out new learning opportunities. When solving problems, I try to consider not only technical details, but also business aspects",
  question3: "Key competences",
  answer3: [
    {
      title: "Professional Frontend Development",
      description:
        "He has experience in developing professional level of frontend and fullstack skills (mainly TypeScript and React) in several companies and tries to steadily improve his developement skills. Also he spends his rest time to adapt to new technologies through personal projects.",
      img: coding,
    },
    {
      title: "Proficient foreign language",
      description:
        "While living in Germany for many years, he can speak semi-native German and has hands-on work experience with proficient business-level English communication.",
      img: language,
    },
    {
      title: "2D & 3D Web Graphics Visualization",
      description:
        "He is studying 2D data visualization and 3D model web application to have different strengths from other front-end developers. Currently, his personal projects related to web graphics are also available.",
      img: data,
    },
  ],
  callAction: "Interesting ? then click button to get to know now !",
};

export const AboutPageText = {
  intro: "About myself",
  introAnswer:
    "Kihun Kim works as a Frontend Engineer at PACE Telematics in Germany. He is currently developing progressive web application (pwa) & web-app for PACE Drive mobile app. This app is an all-in-one mobile fueling application that drivers can search gas stations, check real-time fuel price, opening hours, and location. They can control the entire fuel process with our app. After fueling they can pay their fuel price only with the click of one button. \nHe is an enterprising developer who always seeks new challenges. Besides, he always tries to find and make up for his shortcomings. He is steadily carrying out coding projects for his personal development",
  experience: "Professional experiences",
  experienceAnswer: [
    {
      timerange: "July 2021 – Present / Karlsruhe, Germany",
      company: "PACE Telematics (Connected Fueling Team)",
      role: "Junior Frontend Engineer / Full-time",
      description:
        "Progressive web app(PWA) & web app for Pace Drive mobile application",
    },
    {
      timerange: "December 2020 – May 2021 / Heidelberg, Germany",
      company: "  Vayu Software (Core Development Team)",
      role: "Junior Fullstack Engineer/ full-time, internship",
      description: "Low code platform development",
    },
    {
      timerange: "November 2020 – Mar. 2021 / Karlsruhe, Germany",
      company: "dmTECH (Receipt Datamanagement Team)",
      role: "Data Warehouse Manager / part-time",
      description: "Receipt data management in data warehouse",
    },
    {
      timerange: "Sept. 2020 – Oct. 2020 / Karlsruhe, Germany",
      company: "MINT-Kolleg (Educational institute in KIT)",
      role: "Mathe Tutor / Part-time",
      description: "Math teaching, exercise preparation",
    },
  ],
  competence: "Technical skills",
  competenceAnswer: [
    {
      frontend:
        "JavaScript / TypeScript / React / Redux / Redux toolKit / Styled-component / Webpack / Babel / HTML / CSS",
      backend:
        "Node.js / Express.js / MongoDB / REST / Micro service architecture",
      dataVisualization: "D3.js",
      webGL: "Three.js",
    },
  ],
  certificate: "Certificates",
  certificateAnswer: "TensorFlow Developer Certificate by Google",
  languages: "Languages",
  languagesAnswer: [
    {
      language: "English",
      level: "Professional proficiency",
    },
    {
      language: "Deutsch (German)",
      level: "Verhandlungssicher (professional proficiency)",
    },
    {
      language: "한국어 (Korean)",
      level: "원어민 (native)",
    },
  ],
  resume: "Resume",
  resumeAnswer: [
    {
      resume: "Resume (en)",
    },
    {
      resume: "이력서 (kr)",
    },
  ],
};

export const ProjectPageText = {
  title: "project list",
  projectlist: [
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
    {
      title: "OnlineShop baseline API",
      description:
        "online shop baseline api (user register, login, product register, update, delete, search) with swagger UI documentation",
      link: "https://onlineshop-baseline-api.herokuapp.com/docs/",
      img: baseline,
    },
    {
      title: "Query API",
      description: "Custom query REST API by sorting querying and filtering",
      link: "https://queryapi-deutschkihun.herokuapp.com/",
      img: api,
    },
    {
      title: "Digit recognition on furnace",
      description:
        "Seminar project: recognizing digit on blast furnace by AI automatically",
      link: "https://drive.google.com/file/d/1_HqckLlYRZdY3UiEciRIYdtLDwRvFE90/view?usp=sharing",
      img: furnace,
    },
    {
      title: "User Preference Service",
      description:
        "Bachelor thesis: building user preference application for individual mobility users ",
      link: "https://drive.google.com/file/d/1zXH7KZtafyelipzZ9itkcu20cTqyZlU6/view?usp=sharing",
      img: preferences,
    },
  ],
};
