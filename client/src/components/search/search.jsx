import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { useClickOutside } from "../../hooks/useClickOutside";
import { useDebounceValue } from "../../hooks/useDebounce";
import { getData } from "../../api/api";

import { apiConstants } from "../../constants/urlConstants";

import SearchField from "./search-field";
import SearchResult from "./search-result";
import { Loading } from "../loading";

export const SearchContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 80%;
`;

const StyledLoading = styled(Loading)`
  position: absolute;
  top: 14px;
  right: 16px;
`;

const Search = ({ location }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [resultsOpen, setResultsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const inputRef = useRef(null);
  useClickOutside(inputRef, () => setResultsOpen(false));

  const debounceSearchQuery = useDebounceValue(searchQuery, 500);

  // Clear search query when pathname changes
  useEffect(() => {
    setSearchQuery("");
    setResultsOpen(false);
  }, [location.pathname]);

  function searchKeyPressHandler(e) {
    if (e.keyCode === 27) {
      setResultsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", searchKeyPressHandler);
    return () => document.removeEventListener("keyup", searchKeyPressHandler);
  }, []);

  useEffect(() => {
    const search = async () => {
      const response = await getData(
        `${apiConstants.search}/${searchQuery.trim()}`
      );

      setResults(response.data);
      setLoading(false);

      const openSearchResult = debounceSearchQuery !== "";
      setResultsOpen(openSearchResult);
    };

    debounceSearchQuery ? search() : setResultsOpen(false);

    return () => setLoading(false);
  }, [debounceSearchQuery]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value) {
      setLoading(true);
    }
  };

  const handleInputFocus = () => searchQuery && setResultsOpen(true);

  return (
    <>
      <SearchContainer>
        <SearchField
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          value={searchQuery}
          inputRef={inputRef}
          placeholder={"Search your materials..."}
          hideIcon={false}
          autoFocus={false}
        >
          {loading && <StyledLoading size="xxs" />}

          {resultsOpen && <SearchResult items={results} />}
        </SearchField>
      </SearchContainer>
    </>
  );
};

export default Search;
