import React, { useState } from "react";
import Suggestion from "search-suggestion";
import escapeRegex from "../../utils/escapeRegex";
import createSuggestions from "../../utils/createSuggestions";
import "./SearchInput";
import tvShows from "../../utils/tvShows";
import SearchInput from "./SearchInput";

const SearchForm = ({ history, searchText, setSearchText, loading }) => {
  const [suggestions, setSuggestions] = useState([]);

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
    <form onSubmit={e => handleSearchForm(e)} autoComplete="off">
      <div className="form-group">
        <Suggestion
          items={suggestions}
          onSelectedItem={item => handleSuggestion(item)}
        >
          {props => (
            <SearchInput
              {...props}
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
