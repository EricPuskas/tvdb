import React from "react";
import uuid from "uuid/v4";

const SearchSuggestions = ({
  isOpen,
  loading,
  getItemProps,
  highlightedIndex,
  getListItemProps,
  items,
  selectedItem
}) => {
  const getSelectedStyles = (item, index) => ({
    backgroundColor:
      highlightedIndex === index ? "rgb(232, 232, 232)" : "#f9f9f9",
    fontWeight: selectedItem && selectedItem === item ? "bold" : "normal"
  });
  return (
    <>
      {isOpen && !loading && (
        <div {...getListItemProps()} data-test="search-suggestions">
          {items.slice(0, 7).map((item, index) => (
            <div
              {...getItemProps({ item, index })}
              key={uuid()}
              className="Search-suggestions"
              style={getSelectedStyles(item, index)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchSuggestions;
