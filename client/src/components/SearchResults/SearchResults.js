import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchSeries, cleanUp, clearErrors } from "../../actions/api";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import SearchForm from "../SearchForm/SearchForm";
import SearchFeed from "./SearchFeed";
import Logo from "../Logo/Logo";
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

  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [location]);

  return (
    <div className="SearchResults">
      <div className="SearchResults-Search">
        <Logo />
        <SearchForm
          history={history}
          displaySearchText={displaySearchText}
          loading={loading}
          searchSeries={searchSeries}
          clearErrors={clearErrors}
        />
      </div>
      <SearchFeed
        error={error}
        search_results={search_results}
        loading={loading}
        displaySearchText={displaySearchText}
      />
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
