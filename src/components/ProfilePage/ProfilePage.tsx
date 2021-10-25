import React from "react";
import styled from "styled-components";
import { Wrapper } from "../LandingPage/LandingPage";

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
`;

const ProfilePage = (): JSX.Element => {
  return (
    <Wrapper>
      <form className="main-box">
        <Title>Kihun Kim</Title>
        <textarea>gerg</textarea>
        <div className="form-control">
          <input
            type="text"
            name="name"
            className="task-input"
            placeholder="e.g. wash dishes"
          />
          <button type="submit" className="btn submit-btn">
            submit
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default ProfilePage;
