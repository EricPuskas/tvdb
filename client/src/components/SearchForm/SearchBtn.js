import React from "react";

const SearchBtn = () => {
  const searchBtnTxt = window.innerWidth <= 600 ? null : "Search";
  return (
    <div className="input-group-append">
      <button
        className="btn btn-primary"
        type="submit"
        aria-label="Search Button"
      >
        <i className={"fas fa-search"} /> {searchBtnTxt}
      </button>
    </div>
  );
};

export default SearchBtn;
