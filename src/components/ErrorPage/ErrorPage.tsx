import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../LandingPage/LandingPage";
import { Title } from "../ProfilePage/ProfilePage";

export const Warning = styled.h2`
  text-align: center;
`;

export const ErrorPage = (): JSX.Element => {
  return (
    <Wrapper>
      <form className="main-box">
        <Title>Not Found 404</Title>
        <Warning>This is not the page that you are looking for.</Warning>
        <Link to="/" download className="download">
          Back to Landing Page
        </Link>
      </form>
    </Wrapper>
  );
};
