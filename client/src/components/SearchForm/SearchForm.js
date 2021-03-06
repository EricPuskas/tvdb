import React, { useState, useEffect } from "react";

//Utilities
import createSuggestions from "../../utils/createSuggestions";
import tvShows from "../../utils/tvShows";
import escapeRegex from "../../utils/escapeRegex";

//Components
import SearchInput from "./SearchInput";
import Suggestion from "search-suggestion";

//SCSS
import "./SearchForm.scss";

const SearchForm = ({
  history,
  error,
  loading,
  displaySearchText,
  clearErrors,
  searchSeries
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (
      displaySearchText &&
      displaySearchText !== "" &&
      window.location.pathname.match("search")
    ) {
      clearErrors();
      searchSeries(displaySearchText);
      setSearchText(displaySearchText);
    }
  }, [searchSeries, displaySearchText, clearErrors]);

  const onSearchChange = e => {
    let value = e.target.value;
    let filterData = [];

    setSearchText(value);
    if (value) {
      filterData = createSuggestions(value, tvShows);
      setSuggestions(filterData);
    }
  };

  const handleSearchForm = e => {
    e.preventDefault();
    if (searchText && searchText !== "") {
      let search_query = escapeRegex(searchText);
      history.push(`/search?q=${search_query}`);
    }
    return;
  };

  const handleSearch = item => {
    let search_query;
    if (item) {
      search_query = escapeRegex(item);
      history.push(`/search?q=${search_query}`);
      setSearchText(search_query);
    } else if (searchText !== "") {
      search_query = escapeRegex(searchText);
      setSearchText(search_query);
      history.push(`/search?q=${search_query}`);
    }
  };

  const handleSuggestion = item => {
    setSearchText(item);
    handleSearch(item);
  };
  return (
    <form
      onSubmit={e => handleSearchForm(e)}
      autoComplete="off"
      data-test="search-form"
    >
      <div className="form-group">
        <Suggestion
          items={suggestions}
          onSelectedItem={item => handleSuggestion(item)}
        >
          {props => (
            <SearchInput
              {...props}
              error={error}
              loading={loading}
              onSearchChange={onSearchChange}
              searchText={searchText}
            />
          )}
        </Suggestion>
      </div>
    </form>
  );
};

export default SearchForm;
