import React from "react";
import { Wrapper } from "../LandingPage/LandingPage";
import { Title } from "../ProfilePage/ProfilePage";

const ContactPage = (): JSX.Element => {
  return (
    <Wrapper>
      <form className="main-box">
        <Title>Contact Me </Title>
        <div className="form-control">
          <h4>Email</h4> <h4>Name</h4>
        </div>
        <div className="form-control">
          <input
            type="email"
            name="email"
            className="task-input"
            placeholder="e.g deutschkihun@gmail.com"
          />
          <input
            type="text"
            name="name"
            className="task-input"
            placeholder="e.g Kihun Kim"
          />
        </div>
        <h4>Message</h4>
        <textarea placeholder="write a message"></textarea>

        <button type="submit" className="btn submit-btn">
          submit
        </button>
      </form>

      <form className="main-box">
        <Title>Or visit my pages</Title>
        <a href="https://github.com/deutschkihun">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/kihun-kim-b35b73174/">
          <i className="fab fa-linkedin"></i>
        </a>
      </form>
    </Wrapper>
  );
};
export default ContactPage;
