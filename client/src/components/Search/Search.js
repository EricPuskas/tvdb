import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import "./Search.scss";

const Search = ({ history }) => {
  return (
    <div className="Search">
      <Logo text="Your favorite show, one click away!" />
      <SearchForm history={history} />
    </div>
  );
};

export default withRouter(Search);
