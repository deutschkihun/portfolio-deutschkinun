import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../LandingPage/LandingPage";
//import profile from "../profile.png";

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
`;

export const Intro = styled.p`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Download = styled.div`
  text-align: center;
`;

export const Space = styled.br``;
export const SubTitle = styled.div`
  font-size: 25px;
`;

export const ProfilePage = (): JSX.Element => {
  return (
    <Wrapper>
      <form className="main-box">
        {/*<Title className="thumbwrap">
          Kihun Kim
          <span>
            <img src={profile} alt="profile" />
          </span>
          </Title>*/}
        <Title>Kihun Kim</Title>
        <Intro>
          Kihun Kim is a Coding Enthusiast, currently works as a Frontend
          Engineer at PACE Telematices in Karlsruhe, Germany. He is currently
          developing all-in-one mobile fueling application that clients can
          handle all the functions they need to refuel with this app, such as
          searching and payment system. He is an enterprising developer who is
          not complacent and always seeks new challenges. Besides, he always
          tries to find and make up for his shortcomings. He is steadily
          carrying out personal projects outside of the commercial work. About
          10 personal projects are currently released in his GitHub with the
          source code. In online world, he is working under the nickname
          &quot;deutschkihun&quot; instead of his real name.
        </Intro>
      </form>
      <form className="main-box">
        <Title>Work experiences</Title>
        <Intro>
          <ul>
            <li>
              July 2021 – Present / Karlsruhe, Germany
              <Space /> PACE Telematics (Frontend Development Team) / Junior
              Frontend Engineer / Full-time
              <Space /> All-in-one Europe&apos;s leading mobile fueling
              application development (PACE Drive, Connected Fueling)
            </li>
            <Space />
            <li>
              Dec. 2020 – May 2021 / Heidelberg, Germany
              <Space />
              Vayu Software (Core Development Team) / Junior Fullstack Engineer
              / Internship
              <Space /> Low-Code platform development
            </li>
            <Space />
            <li>
              Nov. 2020 – Mar. 2021 / Karlsruhe, Germany
              <Space /> dmTECH (Receipt Datamanagement Team) / Data Warehouse
              Manager / Part-time
              <Space /> Receipt data management in data warehouse
            </li>
            <br />
            <li>
              Sept. 2020 – Oct. 2020 / Karlsruhe, Germany
              <Space /> MINT-Kolleg (Educational institute in KIT) / Mathe Tutor
              / Part-time
              <Space /> Math teaching, exercise preparation
            </li>
          </ul>
        </Intro>
      </form>
      <form className="main-box">
        <Title>Coding</Title>
        <Intro>
          <ul>
            <li>
              <SubTitle>Frontend</SubTitle>
              JavaScript / TypeScript / React / React Native / HTML5 / CSS /
              Styled-component / Passport.js
            </li>
            <Space />
            <li>
              <SubTitle>Backend</SubTitle>
              Node.js / Express.js / MongoDB / REST API / Server-side rendering
              (SSR) / Microservices architecture
            </li>
            <Space />
            <li>
              <SubTitle>DevOps</SubTitle>
              Git / Gitlab / GitHub
            </li>
          </ul>
        </Intro>
      </form>
      <form className="main-box">
        <Title>Certificates</Title>
        <Intro>
          <ul>
            <li>
              <SubTitle>TensorFlow Developer Certificate</SubTitle>
              Fundational, practical machine learning skills through the
              building and training of models using TensorFlow / Google
            </li>
            <Space />
            <li>
              <SubTitle>Data Analyst Nanodegree</SubTitle>
              Data Wrangling, Data Visualization, Statistics with Python /
              Udacity
            </li>
          </ul>
        </Intro>
      </form>
      <form className="main-box">
        <Title>Languages</Title>
        <Intro>
          <ul>
            <li>
              <SubTitle>English</SubTitle>
              Professional Proficiency
            </li>
            <Space />
            <li>
              <SubTitle>German</SubTitle>
              Professional Proficiency (Verhandlungssicher)
            </li>
            <Space />
            <li>
              <SubTitle>Korean</SubTitle>
              Native (원어민)
            </li>
          </ul>
        </Intro>
      </form>
      <form className="main-box">
        <Title>Resume</Title>
        <Download>
          <Link
            to="/files/Resume_DE.pdf"
            target="_blank"
            download
            className="download"
          >
            Download (DE)
          </Link>
          <Space />
          <Link
            to="/files/Resume_EN.pdf"
            target="_blank"
            download
            className="download"
          >
            Download (EN)
          </Link>
          <p>updated on {moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
        </Download>
      </form>
    </Wrapper>
  );
};
