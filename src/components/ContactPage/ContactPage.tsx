import React from "react";
import { Wrapper } from "../LandingPage/LandingPage";
import { Title } from "../ProfilePage/ProfilePage";

export const ContactPage = (): JSX.Element => {
  return (
    <Wrapper>
      <form
        target="_blank"
        action="https://formsubmit.co/deutschkihun@gmail.com"
        method="POST"
        className="main-box"
      >
        <Title>Contact Me </Title>
        <div className="form-control">
          <input
            type="email"
            name="email"
            className="task-input"
            placeholder="Email Address"
            required={true}
          />
          <input
            type="text"
            name="name"
            className="task-input"
            placeholder="Full Name"
            required={true}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          required={true}
        ></textarea>
        <button
          type="submit"
          className="btn submit-btn"
          onClick={() => window.close()}
        >
          submit
        </button>
        <div className="icon">
          <a
            href="https://github.com/deutschkihun"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kihun-kim-b35b73174/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </form>
    </Wrapper>
  );
};
