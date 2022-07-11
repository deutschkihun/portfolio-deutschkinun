import React from "react";
import {
  SearchContainer,
  SearchItem,
  SearchWrap,
  SearchForm,
  SearchInput,
  SearchScope,
  KeywordForm,
  Overlay,
} from "../helper/lib/Search";
import search from "../assets/search.svg";

export const Search = () => {
  return (
    <SearchContainer>
      <SearchWrap>
        <SearchItem>
          <SearchForm>
            <SearchInput placeholder="search box" />
            <SearchScope src={search} alt="search" />
          </SearchForm>
          <KeywordForm>
            {Array.from({ length: 10 }, (_, k) => (
              <span>
                <a href="/">Keyword {k + 1}</a>
              </span>
            ))}
          </KeywordForm>
        </SearchItem>
      </SearchWrap>
      <Overlay />
    </SearchContainer>
  );
};
