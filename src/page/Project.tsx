import React, { useEffect } from "react";
import {
  CardContainer,
  CardList,
  CardItem,
  CardImg,
  CardTitle,
  CardDesc,
} from "../helper/lib/Card";
import { FormTitle } from "../helper/lib/Component";
import { FormattedMessage } from "react-intl";
import { ProjectENList, ProjectKRList } from "../assets/thumbnail/list";

export const Project = (): JSX.Element => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      reveals[i].classList.add("active");
    }
  }, []);

  const lang =
    localStorage.getItem("locale") === "kr" ? ProjectKRList : ProjectENList;
  return (
    <>
      <FormTitle>
        <FormattedMessage id="ProjectTitle" />
      </FormTitle>
      <CardContainer className="reveal fade-bottom">
        <CardList>
          {lang.map(({ title, description, link, img }, i) => (
            <CardItem key={i}>
              <CardImg
                src={img}
                onClick={() => window.location.assign(link)}
                alt={title}
              />

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
