import { Table } from "react-bootstrap";
import styled from "styled-components";

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
`;

export const FormContainer = styled.form`
  border-radius: 0.25rem;
  border: 1px solid;
  padding: 2rem 2.5rem;
  min-width: 350px;
  max-width: 70vw;
  margin: 50px auto;

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

    @media screen and (max-width: 468px) {
      width: 50px;
    }
  }
`;

export const Input = styled.input`
  height: 48px;
  padding: 0.375rem 0.75rem;
  border-radius: 12px;
  margin: 0.5rem auto;
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: 12px;
  height: 30vh;
`;

export const SilderContainer = styled.div`
  padding: 1rem;
  border: 0.2rem solid;
  width: 70vw;
  margin: auto;
  border-radius: 8px;
  margin-bottom: 3rem;
`;

export const Silder = styled.div`
  padding: 1rem;
  border: 0.2rem solid;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 420px;
  justify-items: center;

  svg {
    fill: black;
  }

  img {
    width: 200px;
    margin: auto;
  }

  h2 {
    margin: auto;
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

export const Tables = styled(Table)`
  min-width: 300px;
  max-width: 70vw;
  border: 2px solid;

  .col-table {
    flex-shrink: 0;
    width: 170px;
  }

  th {
    border: 2px solid !important;
  }

  td {
    border: 2px solid;
    text-align: center;
    line-height: 2.5rem;

    .info-list {
      margin-bottom: 2rem;
    }
    .info-list-item {
      display: flex;
      margin: 0.5em 0;
      text-align: start;
    }

    .sub-info-list-item {
      display: flex;
      margin: 0.5em 1em;
      text-align: start;
    }

    .info-list-item:before {
      content: "⌘";
      margin-right: 0.5em;
    }
    .sub-info-list-item:before {
      content: "➭";
      margin-right: 0.5em;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.section`
  margin-top: 150px;
  flex: 1 auto;
`;
