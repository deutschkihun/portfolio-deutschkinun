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
        <form className="main-box">
          <h4 style={{ textAlign: "center" }}>hello</h4>
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
