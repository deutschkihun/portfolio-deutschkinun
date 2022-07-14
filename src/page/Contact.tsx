import React from "react";
import {
  FormTitle,
  FormContainer,
  Input,
  TextArea,
} from "../helper/lib/Component";
import { Button } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";

export const Contact = (): JSX.Element => {
  const intl = useIntl();

  return (
    <>
      <FormTitle>
        <FormattedMessage id="ContactTitle" />
      </FormTitle>
      <FormContainer
        target="_blank"
        action="https://formsubmit.co/deutschkihun@gmail.com"
        method="POST"
        className="main-box"
      >
        <TextArea
          name="message"
          placeholder={intl.formatMessage({ id: "Message" })}
          required={true}
        />
        <Input
          type="text"
          name="name"
          placeholder={intl.formatMessage({ id: "Name" })}
          required={true}
        />
        <Input
          type="email"
          name="email"
          placeholder={intl.formatMessage({ id: "Email" })}
          required={true}
        />
        <Button
          type="submit"
          style={{ borderRadius: "12px", margin: "0.5rem auto" }}
        >
          <FormattedMessage id="Submit" />
        </Button>
      </FormContainer>
    </>
  );
};
