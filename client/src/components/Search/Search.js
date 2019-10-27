import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import "./Search.scss";

const Search = ({ history }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="Search">
      <Logo text="Your favorite show, one click away!" />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        history={history}
      />
    </div>
  );
};

export default withRouter(Search);
