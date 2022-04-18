import React, { useEffect } from "react";
import "../index.css";
import {
  Announcement,
  Grid1,
  Grid2,
  Profile,
  Btn,
  SildeContaier,
  SubSilder,
} from "../helper/lib";
import profile from "../assets/profile.png";
import { useHistory } from "react-router";
import { landingPageText } from "../assets/data";
import { Link } from "react-router-dom";

export const LandingPage = (): JSX.Element => {
  const history = useHistory();
  const {
    title,
    name,
    question1,
    question2,
    question3,
    answer1,
    answer2,
    answer3,
    callAction,
  } = landingPageText;

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return (
    <>
      <Grid1>
        <h1>{title}</h1>
      </Grid1>
      <Grid2>
        <h1>{name}</h1>
      </Grid2>

      <Grid1>
        <h1>{question1}</h1>
      </Grid1>
      <Grid2 style={{ justifyContent: "left" }}>
        <h4>{answer1}</h4>
      </Grid2>

      <Grid1>
        <h1>{question2}</h1>
      </Grid1>
      <Grid2 style={{ justifyContent: "left" }}>
        <h4>{answer2}</h4>
      </Grid2>

      <Grid1>
        <h1>{question3}</h1>
      </Grid1>

      {answer3.map(({ title, description, img }, i) => (
        <SildeContaier key={i}>
          <SubSilder>
            <img src={img} alt="img" />
            <h2>
              {title}
              <p>{description}</p>
            </h2>
          </SubSilder>
        </SildeContaier>
      ))}

      <Grid2 style={{ gridTemplateRows: "repeat(1, 50px)" }}>
        <h4>{callAction}</h4>
      </Grid2>

      <Profile>
        <img src={profile} alt="profile" />
      </Profile>

      <Grid2 style={{ gridTemplateRows: "repeat(1, 50px)" }}>
        <Btn style={{ width: "50%" }} variant="primary" size="lg" active>
          <Link to="/about">Get2Know</Link>
        </Btn>
      </Grid2>

      <Announcement>
        <div className="container">
          <p>
            This application is optimized on chrome and safari environments.
          </p>
        </div>
      </Announcement>
    </>
  );
};
