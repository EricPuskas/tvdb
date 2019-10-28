import React, { memo } from "react";
import ShowItem from "../Shows/ShowItem";
import uuid from "uuid/v4";
import Loader from "../Loader/Loader";

const SearchFeed = ({ search_results, error, displaySearchText, loading }) => {
  const results_count = [];
  const results = search_results.map(show => {
    if (show.overview) {
      results_count.push(show.id);
      return <ShowItem key={uuid()} show={show} />;
    } else return null;
  });

  return (
    <>
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
    </>
  );
};

export default memo(SearchFeed);
