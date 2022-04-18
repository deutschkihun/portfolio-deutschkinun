import React from "react";
import { Link } from "react-router-dom";
import { Title, Form } from "../helper/lib";

export const KoreanLandingPage = (): JSX.Element => {
  return (
    <Form>
      <Title>Comming soon</Title>
      <Link to="/">back to main</Link>
    </Form>
  );
};
