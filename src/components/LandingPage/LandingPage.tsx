import React from "react";
import "../../index.css";
import styled from "styled-components";

export const Wrapper = styled.article`
  padding-top: 81px;
`;

const LandingPage = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <form className="task-form">
          <h4>task manager</h4>
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
    </>
  );
};

export default LandingPage;
