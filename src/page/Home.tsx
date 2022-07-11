import React from "react";
import { HomeText } from "../assets/data";
import { Announcement } from "../helper/lib/Announcement";
import { Intro, Silder, SilderContainer } from "../helper/lib/Component";

export const Home = (): JSX.Element => {
  const {
    title,
    name,
    question1,
    question2,
    question3,
    answer1,
    answer2,
    answer3,
  } = HomeText;

  return (
    <>
      <Intro>
        <h2>{title}</h2>
        <h1>{name}</h1>
      </Intro>

      <Intro>
        <h2>{question1}</h2>
        <p>{answer1}</p>
      </Intro>

      <Intro>
        <h2>{question2}</h2>
        <p>{answer2}</p>
      </Intro>

      <Intro>
        <h2>{question3}</h2>
        {answer3.map(({ title, img }, i) => (
          <SilderContainer key={i}>
            <Silder>
              <img src={img} alt="img" />
              <h2>{title}</h2>
            </Silder>
          </SilderContainer>
        ))}
      </Intro>
      <Announcement>
        This app is designed to take into account cross-browsing issues. You can
        use this app on chrome safari or firefox
      </Announcement>
    </>
  );
};
