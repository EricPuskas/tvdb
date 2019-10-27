import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchSeries, cleanUp, clearErrors } from "../../actions/api";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import uuid from "uuid/v4";
import SearchForm from "../SearchForm/SearchForm";
import Show from "../Show/Show";
import Logo from "../Logo/Logo";
import "./SearchResults.scss";

const SearchResults = ({
  clearErrors,
  searchSeries,
  history,
  location,
  errors: { error },
  shows: { search_results }
}) => {
  let displaySearchText = queryString.parse(location.search).q;

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    let search_value = queryString.parse(location.search);
    if (search_value.q !== "") {
      clearErrors();
      searchSeries(search_value.q);
      setSearchText(search_value.q);
    }
  }, [searchSeries, location.search, clearErrors]);

  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [location]);

  const results_count = [];
  const results = search_results.map(show => {
    if (show.overview) {
      results_count.push(show.id);
      return <Show key={uuid()} show={show} />;
    } else return null;
  });
  return (
    <div className="SearchResults">
      <div className="SearchResults-Search">
        <Logo />
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          history={history}
        />
      </div>
      {results_count.length > 0 ? (
        <p className="text-center">
          Found {results_count.length}{" "}
          {results_count.length === 1 ? "result" : "results"} matching "
          <strong>{displaySearchText}</strong>".
        </p>
      ) : null}
      {!error && <div className="SearchResults-results">{results}</div>}
      {error && <h1 className="text-center"> {error} </h1>}
    </div>
  );
};

const mapStateToProps = state => ({
  shows: state.shows,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { searchSeries, clearErrors }
)(withRouter(SearchResults));
