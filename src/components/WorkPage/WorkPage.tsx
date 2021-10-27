import React from "react";
import styled from "styled-components";
import { Wrapper } from "../LandingPage/LandingPage";
import projects from "../project.json";
import profile from "../profile.png";

interface Project {
  id: number;
  img: string;
  title: string;
}

export const OutLine = styled.div`
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 0px;
  padding-left: 5vw;
  padding-right: 5vw;
`;

export const ProjectContainer = styled.form`
  max-width: var(--fixed-width);
  margin: 0 auto;
  margin-top: 6rem;
  grid-column: 1;

  h4 {
    text-align: center;
  }
`;

export const Thumbnail = styled.div`
  text-align: center;
`;

const WorkPage = (): JSX.Element => {
  return (
    <Wrapper>
      {projects.map((project: Project, index: number) => {
        return (
          <OutLine key={project.id}>
            <ProjectContainer>
              <Thumbnail>
                <h2 key={index}>{project.title}</h2>
                <img src={profile} alt={project.title} />
                <button type="submit" className="btn submit-btn">
                  Detail
                </button>
              </Thumbnail>
            </ProjectContainer>
          </OutLine>
        );
      })}
    </Wrapper>
  );
};

export default WorkPage;
