import React from "react";
import styled from "styled-components";
import { Wrapper } from "../LandingPage/LandingPage";
import { projects } from "../assets/projects";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  img: string;
  title: string;
  link?: string;
  paper?: string;
  description: string;
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

export const ImageBox = styled.div`
  padding: 0px 20px;
`;

export const WorkPage = (): JSX.Element => {
  return (
    <Wrapper>
      {projects.map((project: Project) => {
        const {
          id,
          img: screenshot,
          title,
          link,
          description,
          paper,
        } = project;
        const img = new Image();
        img.src = screenshot;

        img.onload = function () {
          const canvas = document.getElementById(id) as HTMLCanvasElement;
          const ctx = canvas && canvas.getContext("2d");
          canvas.width = 700;
          canvas.height = 300;
          ctx && ctx.drawImage(img, 0, 0, 700, 300);
        };
        return (
          <OutLine key={id}>
            <ProjectContainer>
              <Thumbnail>
                <h1 key={id}>{title}</h1>
                <p>{description}</p>
                <canvas id={id} />
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="download"
                  >
                    Get more
                  </a>
                )}
                {paper && (
                  <Link
                    to={paper}
                    target="_blank"
                    download
                    className="download"
                  >
                    Paper
                  </Link>
                )}
              </Thumbnail>
            </ProjectContainer>
          </OutLine>
        );
      })}
    </Wrapper>
  );
};
