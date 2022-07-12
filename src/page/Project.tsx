import React from "react";
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
  const lang =
    localStorage.getItem("locale") === "kr" ? ProjectKRList : ProjectENList;
  return (
    <>
      <FormTitle>
        <FormattedMessage id="ProjectTitle" />
      </FormTitle>
      <CardContainer>
        <CardList>
          {lang.map(({ title, description, link, img }, i) => (
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
