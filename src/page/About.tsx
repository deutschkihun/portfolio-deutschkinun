import React from "react";
import {
  FormTitle,
  FormContainer,
  FormItem,
  Tables,
} from "../helper/lib/Component";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { StackList } from "../assets/stack/list";
import { LangList } from "../assets/lang/list";
import { ExperienceKR, ExperienceEN } from "../assets/experience/list";

export const About = (): JSX.Element => {
  const lang =
    localStorage.getItem("locale") === "kr" ? ExperienceKR : ExperienceEN;

  return (
    <>
      <FormContainer>
        <FormTitle>
          <FormattedMessage id="AboutTitle" />
        </FormTitle>
        <ul>
          {lang.map(({ role, company, timerange, location }, i) => (
            <Tables striped bordered hover key={i}>
              <thead>
                <tr>
                  <th className="col-table">#</th>
                  <th>
                    <FormattedMessage id="AboutExplanation" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-table">
                    <FormattedMessage id="AboutCompany-col" />
                  </td>
                  <td>{company}</td>
                </tr>
                <tr>
                  <td className="col-table">
                    <FormattedMessage id="AboutDuration-col" />
                  </td>
                  <td>{timerange}</td>
                </tr>
                <tr>
                  <td className="col-table">
                    <FormattedMessage id="AboutLocation-col" />
                  </td>
                  <td>{location}</td>
                </tr>
                <tr>
                  <td className="col-table">
                    <FormattedMessage id="AboutRole-col" />
                  </td>
                  <td>{role}</td>
                </tr>
                <tr>
                  <td className="col-table">
                    <FormattedMessage id="AboutJD-col" defaultMessage="" />
                  </td>
                  <td>
                    <ul className="info-list">
                      <li className="info-list-item">
                        <FormattedMessage
                          id={`JD-col${i + 1}-1`}
                          defaultMessage=""
                        />
                      </li>
                      <li className="sub-info-list-item">
                        <FormattedMessage
                          id={`JD-col${i + 1}-2-1`}
                          defaultMessage=""
                        />
                      </li>
                      <li className="sub-info-list-item">
                        <FormattedMessage
                          id={`JD-col${i + 1}-2-2`}
                          defaultMessage=""
                        />
                      </li>
                      <li className="sub-info-list-item">
                        <FormattedMessage
                          id={`JD-col${i + 1}-2-3`}
                          defaultMessage=""
                        />
                      </li>
                      <li className="sub-info-list-item">
                        <FormattedMessage
                          id={`JD-col${i + 1}-2-4`}
                          defaultMessage=""
                        />
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </Tables>
          ))}
        </ul>
      </FormContainer>
      <FormTitle>
        <FormattedMessage id="CompetenceTitle" />
      </FormTitle>
      <FormItem>
        {StackList.map((m, i) => (
          <OverlayTrigger key={i} overlay={<Tooltip>{m.name}</Tooltip>}>
            <img className="stack-icon" src={m.img} alt={m.name} />
          </OverlayTrigger>
        ))}
      </FormItem>
      <FormTitle>
        <FormattedMessage id="LanguageTitle" />
      </FormTitle>
      <FormItem>
        {LangList.map((m, i) => (
          <OverlayTrigger key={i} overlay={<Tooltip>{m.name}</Tooltip>}>
            <img
              className="stack-icon"
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
