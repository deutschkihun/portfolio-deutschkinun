import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
  padding: 40px 0;
  overflow: hidden;
  border-top: 1px solid grey;
  z-index: -1;
`;

export const FooterItem = styled.div`
  margin-right: -12px;
  margin-left: -12px;
  font-size: 0;
`;

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding: 0 40px;
  margin: auto;
`;

export const FooterCategory = styled.div`
  display: inline-table;
  @media screen and (max-width: 555px) {
    width: 100%;
  }

  padding-left: 30px;
  vertical-align: top;
  width: 25%;

  h2 {
    height: 20px;
    font-size: 14px;
    margin-bottom: 20px;
    opacity: 0.7;

    @media screen and (max-width: 555px) {
      font-size: 40px;
      height: 30px;
    }
  }

  a {
    display: block;
    /* color: #fff; */
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const Copyright = styled.p`
  margin: 1.5rem 0;
`;
