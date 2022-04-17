import React from "react";
import { useHistory } from "react-router";
import { Title, Btn, Form } from "../helper/lib";

export const KoreanLandingPage = (): JSX.Element => {
  const history = useHistory();
  return (
    <Form>
      <Title>Comming soon</Title>
      <Btn onClick={() => history.push("/")}>back to main</Btn>
    </Form>
  );
};
