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
            <h1>Welcome to Kihun&apos;s Portfolio</h1>
            <p>
              This portfolio is a web application that shows Kihun&apos;s short
              introduction, work experiences, programming skills, and projects
              that he has learned and collected so far. If you want to
              experience this application, click the button below.
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
