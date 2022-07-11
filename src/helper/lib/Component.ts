import styled from "styled-components";

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
`;

export const FormContainer = styled.form`
  background: #313336;
  border-radius: 0.25rem;
  box-shadow: 9px 12px 25px -5px rgb(255 255 255 / 15%),
    11px 13px 10px -5px rgb(255 255 255 / 10%);
  padding: 2rem 2.5rem;
  max-width: 70vw;
  width: 100%;
  margin: 50px auto;

  img {
    width: 100%;
    height: 50%;
  }

  h3 {
    text-align: center;
    font-size: 20px;
  }
  p {
    text-align: justify;
  }

  button {
    width: 100%;
  }
`;

export const FormItem = styled.div`
  max-width: 70vw;
  width: 100%;
  margin: 50px auto;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  grid-gap: 20px;
  img {
    width: 100px;
  }
`;

export const Input = styled.input`
  font-size: 24px;
  height: 48px;
  border-radius: 12px;
  padding-left: 24px;
  margin-bottom: 1rem;
  border: 1px solid #fff;
  background-color: #313336;
  width: 100%;
  color: #c5cad5;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: 12px;
  padding-left: 24px;
  background-color: #313336;
  border: 1px solid #fff;
  height: 30vh;
  color: #fff;
`;

export const SilderContainer = styled.div`
  padding: 1rem;
  border: 0.2rem solid #ececec;
  width: 70vw;
  margin: auto;
  border-radius: 8px;
  color: #212529;
  margin-bottom: 3rem;
`;

export const Silder = styled.div`
  padding: 1rem;
  border: 0.2rem solid #ececec;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 420px;
  justify-items: center;

  img {
    width: 200px;
    margin: auto;
  }

  h2 {
    margin: auto;
    color: #fff;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    display: block;
    text-align: center;

    h2 {
      padding: 1rem 0;
      font-size: 30px !important;
    }

    img {
      min-height: 250px;
    }
  }

  @media screen and (max-width: 570px) {
    display: block;
    text-align: center;

    h2 {
      padding: 1rem 0;
      font-size: 20px !important;
    }

    img {
      width: 60%;
      min-height: 250px;
    }
  }
`;

export const Profile = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 450px);
  grid-template-columns: repeat(1, 12);
  justify-items: center;
  padding: 1rem 0;

  img {
    margin: auto;
  }
`;

export const Intro = styled.div`
  max-width: 70vw;
  margin: auto;
  display: block;
  padding: 3rem 0;

  h1 {
    font-size: 80px;
  }

  h2 {
    font-size: 50px;
  }

  @media screen and (min-width: 1024px) {
    p {
      font-size: 20px;
    }

    h1 {
      font-size: 110px;
      text-align: center;
    }
  }
`;
