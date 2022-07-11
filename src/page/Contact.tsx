import React from "react";
import {
  FormTitle,
  FormContainer,
  Input,
  TextArea,
} from "../helper/lib/Component";
import { Button } from "react-bootstrap";

export const Contact = (): JSX.Element => {
  return (
    <>
      <FormContainer
        target="_blank"
        action="https://formsubmit.co/deutschkihun@gmail.com"
        method="POST"
        className="main-box"
      >
        <FormTitle>Contact Me</FormTitle>
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          required={true}
        />
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          required={true}
        />
        <TextArea name="message" placeholder="Message" required={true} />
        <Button type="submit">Submit</Button>
      </FormContainer>
    </>
  );
};
