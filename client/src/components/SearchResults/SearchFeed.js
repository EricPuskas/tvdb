import React, { memo } from "react";
import ShowItem from "../ShowItem/ShowItem";
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

  const matchingText =
    results_count.length > 0 ? (
      <p className="text-center">
        Found {results_count.length}{" "}
        {results_count.length === 1 ? "result" : "results"} matching "
        <strong>{displaySearchText}</strong>".
      </p>
    ) : null;

  return (
    <>
      {matchingText}
      {loading && !error && <Loader />}
      {!error && !loading && <div className="SearchFeed">{results}</div>}
      {error && <h3 className="Error"> {error} </h3>}
    </>
  );
};

// using memo HOC to prevent unnecessary re-renders when typing in the form
export default memo(SearchFeed);
