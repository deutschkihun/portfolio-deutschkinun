import React from "react";
import {
  CardContainer,
  CardList,
  CardItem,
  CardImg,
  CardTitle,
  CardDesc,
} from "../helper/lib/Card";
import { ProjectText } from "../assets/data";
import { FormTitle } from "../helper/lib/Component";

export const Project = (): JSX.Element => {
  const { projectTitle, projectDescription } = ProjectText;
  return (
    <>
      <FormTitle>{projectTitle}</FormTitle>
      <CardContainer>
        <CardList>
          {projectDescription.map(({ title, description, link, img }, i) => (
            <CardItem key={i}>
              <CardImg
                style={{ backgroundImage: `url(${img})` }}
                onClick={() => window.location.assign(link)}
              >
                <img src={img} alt={title} />
              </CardImg>
              <CardDesc>
                <CardTitle>{title}</CardTitle>
                <br />
                {description}
              </CardDesc>
            </CardItem>
          ))}
        </CardList>
      </CardContainer>
    </>
  );
};
