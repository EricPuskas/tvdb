import React, { useState } from "react";
import Suggestion from "search-suggestion";
import escapeRegex from "../../utils/escapeRegex";
import tvShows from "../../utils/tvShows";

const SearchForm = ({ history, searchText, setSearchText }) => {
  const [suggestions, setSuggestions] = useState([]);

  const filterInput = input => {
    return input.replace(/[^\w\s]/gi, "");
  };
  const createSuggestions = (word, data) => {
    let filter = filterInput(word);
    const re = new RegExp(`${filter.toLowerCase()}.*\\B`, "g");
    return data.filter(item => re.test(item.toLowerCase()));
  };
  const onSearchChange = e => {
    let value = e.target.value;
    setSearchText(value);
    let filterData = [];
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
    if (item) {
      let search_query = escapeRegex(item);
      history.push(`/search?q=${search_query}`);
      setSearchText(search_query);
    } else if (searchText !== "") {
      let search_query = escapeRegex(searchText);
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
          {({
            getInputProps,
            getListItemProps,
            getItemProps,
            selectedItem,
            highlightedIndex,
            items,
            isOpen
          }) => (
            <div>
              <div className="input-group mb-3">
                <input
                  {...getInputProps({
                    onChange: onSearchChange
                  })}
                  className="form-control"
                  type="search"
                  value={searchText}
                  placeholder="Find your favorite shows"
                  aria-label="Search Input"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    aria-label="Search Button"
                  >
                    <i className={"fas fa-search"} />{" "}
                    {window.innerWidth <= 600 ? null : "Search"}
                  </button>
                </div>
              </div>
              {isOpen && (
                <div {...getListItemProps()}>
                  {items.slice(0, 7).map((item, index) => (
                    <div
                      {...getItemProps({ item, index })}
                      key={item.code}
                      className="Search-suggestions"
                      style={{
                        backgroundColor:
                          highlightedIndex === index
                            ? "rgb(232, 232, 232)"
                            : "white",
                        fontWeight:
                          selectedItem && selectedItem === item
                            ? "bold"
                            : "normal"
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </Suggestion>
      </div>
    </form>
  );
};

export default SearchForm;
