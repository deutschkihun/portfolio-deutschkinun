import React from "react";
import { Title, Form, Input, TextArea, Btn } from "../helper/lib";

export const ContactPage = (): JSX.Element => {
  return (
    <>
      <Form
        target="_blank"
        action="https://formsubmit.co/deutschkihun@gmail.com"
        method="POST"
        className="main-box"
      >
        <Title>Contact Me</Title>
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
        <Btn type="submit">Submit</Btn>
      </Form>
    </>
  );
};
