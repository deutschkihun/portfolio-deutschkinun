import React from "react";
import { FormattedMessage } from "react-intl";
import { Announcement } from "../helper/lib/Announcement";
import { Intro, Silder, SilderContainer } from "../helper/lib/Component";
import data from "../assets/data.svg";
import language from "../assets/language.svg";
import coding from "../assets/coding.svg";
import learning from "../assets/learning.svg";

export const Home = (): JSX.Element => {
  return (
    <>
      <Intro>
        <h2>
          <FormattedMessage id="HomeTitle" />
        </h2>
        <h1>
          <FormattedMessage id="HomeName" />
        </h1>
      </Intro>

      <Intro>
        <h2>
          <FormattedMessage id="HomeQuestion1" />
        </h2>
        <p>
          <FormattedMessage id="HomeAnswer1" />
        </p>
      </Intro>

      <Intro>
        <h2>
          <FormattedMessage id="HomeQuestion2" />
        </h2>
        <p>
          <FormattedMessage id="HomeAnswer2" />
        </p>
      </Intro>

      <Intro>
        <h2>
          <FormattedMessage id="HomeQuestion3" />
        </h2>
        <SilderContainer>
          <Silder>
            <img src={coding} alt="img" />
            <h2>
              <FormattedMessage id="HomeAnswer3-1" />
            </h2>
          </Silder>
        </SilderContainer>

        <SilderContainer>
          <Silder>
            <img src={language} alt="img" />
            <h2>
              <FormattedMessage id="HomeAnswer3-2" />
            </h2>
          </Silder>
        </SilderContainer>

        <SilderContainer>
          <Silder>
            <img src={data} alt="img" />
            <h2>
              <FormattedMessage id="HomeAnswer3-3" />
            </h2>
          </Silder>
        </SilderContainer>

        <SilderContainer>
          <Silder>
            <img src={learning} alt="img" />
            <h2>
              <FormattedMessage id="HomeAnswer3-4" />
            </h2>
          </Silder>
        </SilderContainer>
      </Intro>
      <Announcement>
        <FormattedMessage id="Announcement" />
      </Announcement>
    </>
  );
};
