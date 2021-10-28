import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Wrapper } from "../LandingPage/LandingPage";
import { Space } from "../ProfilePage/ProfilePage";
import projects from "../project.json";

interface Params {
  id: string;
}

export const DetailPage = (): JSX.Element => {
  const { id: currentId } = useParams<Params>();

  const currrentProject = projects.find((project) => project.id === currentId);

  console.log(currrentProject); // use this data for mapping !!

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
          {/*<img src={profile} alt="job hunt" className="img main-img" />*/}
        </div>
      </Container>
    </Wrapper>
  );
};
