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
  SearchList,
} from "../helper/lib/Search";
import search from "../assets/search.svg";
import { FormattedMessage } from "react-intl";

interface SearchProps {
  active: boolean;
}

export const Search = ({ active }: SearchProps) => {
  return (
    <SearchContainer>
      <SearchList
        id="searchbar-list"
        className={`${active ? "open-searchbar" : "close-searchbar"}`}
      >
        <SearchWrap>
          <SearchItem>
            <SearchForm>
              <SearchInput />
              <SearchScope src={search} alt="search" />
            </SearchForm>
            <KeywordForm>
              {Array.from({ length: 10 }, (_, k) => (
                <span>
                  <a href="/">
                    <FormattedMessage id="SearchKeyword" /> {k + 1}
                  </a>
                </span>
              ))}
            </KeywordForm>
          </SearchItem>
        </SearchWrap>
        <Overlay />
      </SearchList>
    </SearchContainer>
  );
};
