import React from "react";
import "../../index.css";
import styled from "styled-components";
import profile from "../profile.png";

export const Wrapper = styled.article`
  padding-top: 81px;
`;

export const Container = styled.div`
  .container {
    width: 90vw;
    max-width: 1600px;
    margin: 0 auto;
    margin-top: 6rem;
    display: grid;
    align-items: center;
  }
  h1 {
    font-weight: 700;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 6rem;
    }
    .main-img {
      display: block;
    }
  }
`;

const LandingPage = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <Container>
          <div className="container page">
            <div className="info">
              <h1>job tracking app</h1>
              <p>
                I am baby viral enamel pin chartreuse cliche retro af selfies
                kinfolk photo booth plaid jianbing actually squid 3 wolf moon
                lumbersexual. Hell of humblebrag gluten-free lo-fi man braid
                leggings.
              </p>
            </div>
            <img src={profile} alt="job hunt" className="img main-img" />
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default LandingPage;
