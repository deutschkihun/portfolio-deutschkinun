import React from "react";
import styled from "styled-components";
import { Wrapper } from "../LandingPage/LandingPage";
import projects from "../project.json";
import profile from "../profile.png";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  img: string;
  title: string;
}

export const OutLine = styled.div`
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 0px;
  padding-left: 5vw;
  padding-right: 5vw;
`;

export const ProjectContainer = styled.form`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 6rem;
`;

export const Thumbnail = styled.div`
  text-align: center;

  img {
    padding-bottom: 1rem;
  }
`;

export const WorkPage = (): JSX.Element => {
  return (
    <Wrapper>
      {projects.map((project: Project) => {
        const { id, img, title } = project;
        return (
          <OutLine key={id}>
            <ProjectContainer>
              <Thumbnail>
                <h1 key={id}>{title}</h1>
                <img src={profile} alt={title} />
                <Link to={`/work/${id}`} className="download">
                  Detail
                </Link>
              </Thumbnail>
            </ProjectContainer>
          </OutLine>
        );
      })}
    </Wrapper>
  );
};
