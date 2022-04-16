import React from "react";
import { Link } from "react-router-dom";
import { AboutPageText } from "../assets/data";
import { Btn, Form, Grid3, Title } from "../helper/lib";

export const AboutPage = (): JSX.Element => {
  const {
    intro,
    introAnswer,
    experience,
    experienceAnswer,
    competence,
    competenceAnswer,
    certificate,
    certificateAnswer,
    languages,
    languagesAnswer,
    resume,
    resumeAnswer,
  } = AboutPageText;

  resumeAnswer.map(({ resume }) => console.log(resume.substr(-3, 2)));

  return (
    <>
      <Form>
        <Title>{intro}</Title>
        <p>{introAnswer}</p>
      </Form>
      <Form>
        <Title>{experience}</Title>
        <ul>
          {experienceAnswer.map(
            ({ timerange, company, role, description }, i) => (
              <div key={i}>
                <li style={{ fontSize: "25px" }}>{role}</li>
                <li>{company + ": " + timerange}</li>
                <li>{description}</li>
                <br />
              </div>
            )
          )}
        </ul>
      </Form>
      <Form>
        <Title>{competence}</Title>
        <ul>
          {competenceAnswer.map(
            ({ frontend, backend, dataVisualization, webGL }, i) => (
              <div key={i}>
                <li style={{ fontSize: "25px" }}>Frontend</li>
                <li>{`${frontend}`}</li>
                <br />
                <li style={{ fontSize: "25px" }}>Backend</li>
                <li>{`${backend}`}</li>
                <br />
                <li style={{ fontSize: "25px" }}>Data visualization</li>
                <li>{`${dataVisualization}`}</li>
                <br />
                <li style={{ fontSize: "25px" }}>WebGL</li>
                <li>{`${webGL}`}</li>
              </div>
            )
          )}
        </ul>
      </Form>
      <Form>
        <Title>{certificate}</Title>
        <Btn
          onClick={() =>
            window.location.assign(
              "https://drive.google.com/file/d/1gI0IZuz2WZL8H7CxLOFDwApnyEwgpRkE/view?usp=sharing"
            )
          }
        >
          {certificateAnswer}
        </Btn>
      </Form>
      <Form>
        <Title>{languages}</Title>
        <ul>
          {languagesAnswer.map(({ language, level }, i) => (
            <div key={i} style={{ lineBreak: "auto" }}>
              <li>{`${language} / ${level}`}</li>
              <br />
            </div>
          ))}
        </ul>
      </Form>
      <Form>
        <Title>{resume}</Title>
        <ul>
          <Grid3>
            {resumeAnswer.map(({ resume }, i) => (
              <Btn style={{ width: "70%" }} key={i}>
                <Link
                  to={`/files/resume_${resume.substr(-3, 2)}.pdf`}
                  target="_blank"
                  download
                  className="download"
                >
                  <li>{resume}</li>
                </Link>
              </Btn>
            ))}
          </Grid3>
        </ul>
      </Form>
    </>
  );
};
