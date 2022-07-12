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
      <FormContainer
        target="_blank"
        action="https://formsubmit.co/deutschkihun@gmail.com"
        method="POST"
        className="main-box"
      >
        <FormTitle>
          <FormattedMessage id="ContactTitle" />
        </FormTitle>
        <Input
          type="email"
          name="email"
          placeholder={intl.formatMessage({ id: "Email" })}
          required={true}
        />
        <Input
          type="text"
          name="name"
          placeholder={intl.formatMessage({ id: "Name" })}
          required={true}
        />
        <TextArea
          name="message"
          placeholder={intl.formatMessage({ id: "Message" })}
          required={true}
        />
        <Button type="submit">
          <FormattedMessage id="Submit" />
        </Button>
      </FormContainer>
    </>
  );
};
