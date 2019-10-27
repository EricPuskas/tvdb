import React from "react";
import SearchBtn from "./SearchBtn";
import SearchSuggestions from "./SearchSuggestions";

const SearchInput = ({
  getInputProps,
  selectedItem,
  highlightedIndex,
  getItemProps,
  onSearchChange,
  searchText,
  isOpen,
  getListItemProps,
  items,
  loading
}) => {
  return (
    <>
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
        <SearchBtn />
      </div>
      <SearchSuggestions
        loading={loading}
        searchText={searchText}
        getItemProps={getItemProps}
        selectedItem={selectedItem}
        highlightedIndex={highlightedIndex}
        isOpen={isOpen}
        getListItemProps={getListItemProps}
        items={items}
      />
    </>
  );
};

export default SearchInput;
