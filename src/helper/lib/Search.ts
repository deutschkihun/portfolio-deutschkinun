import styled from "styled-components";

export const SearchContainer = styled.div`
  .open-searchbar {
    transform: translateY(0px);
  }

  .close-searchbar {
    transform: translateY(-1000px);
  }

  #searchbar-list {
    transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

export const SearchList = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
`;

export const SearchWrap = styled.div`
  overflow: visible;
  position: absolute;
  width: 100%;
  height: 60vh;
  z-index: 10;
  background-color: #6f7378;

  @media screen and (max-width: 500px) {
    height: 70vh;
  }
`;

export const SearchItem = styled.div`
  position: relative;
  max-width: 1280px;
  padding: 20px 40px;
  margin: 150px auto;
  border: 1px solid;
`;

export const SearchForm = styled.form`
  padding: 0;
  border: 0;
  vertical-align: baseline;
  box-sizing: border-box;
`;

export const SearchInput = styled.input`
  font-size: 24px;
  height: 48px;
  border-radius: 12px;
  padding-left: 48px;
  margin-bottom: 1rem;
  border: 1px solid #fff;
  background-color: #313336;
  width: 100%;
  color: #c5cad5;
`;

export const SearchScope = styled.img`
  position: absolute;
  top: 2.7rem;
  left: 50px;
  transform: translateY(-50%);
  width: 30px;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.85);
  z-index: 0;
`;

export const KeywordForm = styled.div`
  margin: 20px 0;

  span {
    display: inline-block;
    margin-right: 6px;
    margin-bottom: 0.5rem;

    a {
      padding: 10px;
      display: block;
      border-radius: 8px;
      font-size: 14px !important;
      line-height: 1;
      color: #fff;
      background-color: #313336;
      text-decoration: none;
    }
  }
`;
