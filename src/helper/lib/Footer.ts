import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
  padding: 40px 0;
  overflow: hidden;
  background: #151516;
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
  @media screen and (max-width: 555px) {
    display: inline-grid;
    width: 100%;
  }

  display: inline-block;
  padding-left: 30px;
  vertical-align: top;
  width: 25%;

  h2 {
    height: 20px;
    font-size: 14px;
    margin-bottom: 20px;
    opacity: 0.7;
    color: #fff;

    @media screen and (max-width: 555px) {
      font-size: 40px;
      height: 30px;
    }
  }

  a {
    display: block;
    color: #fff;
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const Copyright = styled.p`
  margin: 1.5rem 0;
`;
