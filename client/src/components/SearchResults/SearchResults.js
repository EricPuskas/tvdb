import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchSeries, cleanUp, clearErrors } from "../../actions/api";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import uuid from "uuid/v4";
import SearchForm from "../SearchForm/SearchForm";
import Show from "../Show/Show";
import Logo from "../Logo/Logo";
import Loader from "../Loader/Loader";
import "./SearchResults.scss";

const SearchResults = ({
  clearErrors,
  searchSeries,
  history,
  location,
  errors: { error },
  shows: { search_results, loading }
}) => {
  let displaySearchText = queryString.parse(location.search).q;

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if (displaySearchText !== "") {
      clearErrors();
      searchSeries(displaySearchText);
      setSearchText(displaySearchText);
    }
  }, [searchSeries, displaySearchText, clearErrors]);

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
          loading={loading}
        />
      </div>
      {results_count.length > 0 ? (
        <p className="text-center">
          Found {results_count.length}{" "}
          {results_count.length === 1 ? "result" : "results"} matching "
          <strong>{displaySearchText}</strong>".
        </p>
      ) : null}
      {loading && <Loader />}
      {!error && !loading && (
        <div className="SearchResults-results">{results}</div>
      )}
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
