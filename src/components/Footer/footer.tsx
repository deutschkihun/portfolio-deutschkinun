import React from "react";
import styled from "styled-components";
import { Space } from "../ProfilePage/ProfilePage";

export const Copyright = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

const Footer = (): JSX.Element => {
  return (
    <div>
      <Space />
      <Space />
      <Copyright>
        <i className="far fa-copyright"></i> 2021 Kihun Kim. All rights
        reserved.
      </Copyright>
      <Space />
    </div>
  );
};

export default Footer;
