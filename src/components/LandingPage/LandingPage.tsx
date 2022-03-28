import React from "react";
import "../../index.css";
import styled from "styled-components";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import { Space } from "../ProfilePage/ProfilePage";

export const Wrapper = styled.article`
  padding-top: 81px;
`;

export const Container = styled.div`
  .container {
    width: 90vw;
    max-width: 1600px;
    margin: 0 auto;
    margin-top: 6rem;
    display: grid;
    align-items: center;
    text-align: justify;
  }
  h1 {
    font-weight: 700;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .container {
      grid-template-columns: repeat(10, 1fr);
      column-gap: 1rem;
    }

    .info {
      grid-column: 2 / 6;
    }
    .main-img {
      display: block;
      grid-column: 8 / 9;
    }
  }
`;

export const LandingPage = (): JSX.Element => {
  return (
    <Wrapper>
      <Space />
      <Container>
        <div className="container">
          <div className="info">
            <h1>Welcome to deutschkihun</h1>
            <p>
              Hello, my name is Kihun and welcome to my portfolio page. This
              site is a web portfolio application that has basic information
              about Kihun. You can find relevant information and experience,
              expertise and projects.I have also attached a function that you
              can download my resume, so please download it if you need it. If
              you have any personal questions, you can proceed by clicking the
              contact menu. Thank you.
            </p>
            <Link to="/profile" className="btn">
              Get Started
            </Link>
          </div>
          <img src={profile} alt="job hunt" className="img main-img" />
        </div>
      </Container>
    </Wrapper>
  );
};
