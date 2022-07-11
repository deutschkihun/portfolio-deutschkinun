import React from "react";
import { AboutText } from "../assets/data";
import { FormTitle, FormContainer, FormItem } from "../helper/lib/Component";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const About = (): JSX.Element => {
  const {
    ExperienceTitle,
    ExperienceDescription,
    CompetenceTitle,
    CompetenceDescription,
    LanguageTitle,
    LanguageDescription,
  } = AboutText;

  return (
    <>
      <FormContainer>
        <FormTitle>{ExperienceTitle}</FormTitle>
        <ul>
          {ExperienceDescription.map(
            ({ timerange, company, location, role, description }, i) => (
              <div key={i}>
                <li style={{ fontSize: "25px" }}>{role}</li>
                <li>{company}</li>
                <li>{timerange}</li>
                <li>{location}</li>
                <li>{description}</li>
                <br />
              </div>
            )
          )}
        </ul>
      </FormContainer>
      <FormTitle>{CompetenceTitle}</FormTitle>
      <FormItem>
        {CompetenceDescription.map((m, i) => (
          <OverlayTrigger
            key={i}
            overlay={<Tooltip style={{ color: "red" }}>{m.name}</Tooltip>}
          >
            <img className="stack" src={m.img} alt={m.name} />
          </OverlayTrigger>
        ))}
      </FormItem>
      <FormTitle>{LanguageTitle}</FormTitle>
      <FormItem>
        {LanguageDescription.map((m, i) => (
          <OverlayTrigger key={i} overlay={<Tooltip>{m.name}</Tooltip>}>
            <img
              className="stack"
              src={m.img}
              alt={m.name}
              title="this will be displayed as a tooltip"
            />
          </OverlayTrigger>
        ))}
      </FormItem>
    </>
  );
};
