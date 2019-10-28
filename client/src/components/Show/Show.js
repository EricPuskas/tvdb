import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getShow } from "../../actions/api";
import { withRouter } from "react-router-dom";
import groupEpisodes from "../../utils/groupEpisodes";
import uuid from "uuid/v4";
import Season from "./Season";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";

const Show = ({ getShow, match, shows, history }) => {
  const { loading } = shows;
  useEffect(() => {
    getShow(match.params.id);
  }, [getShow, match.params.id]);
  let episodes, seasons, allEpisodes;

  if (
    shows.show_info.episodes.data !== undefined &&
    shows.show_info.episodes.data.length > 0
  ) {
    allEpisodes = shows.show_info.episodes.data.flat();

    seasons = groupEpisodes(allEpisodes);
    episodes = seasons.map((episodes, index) => {
      if (index > 0) {
        return (
          <div key={uuid()}>
            <h1> Season {index}</h1>
            <Season episodes={episodes} />
          </div>
        );
      } else return null;
    });
  }
  if (shows.show_info.show && !loading) {
    const { show, poster } = shows.show_info;
    const genres = show.genre
      ? show.genre.map((g, i) => <h4 key={i}>{g}</h4>)
      : null;
    return (
      <div>
        <div className="SearchResults">
          <div className="SearchResults-Search">
            <Logo />
            <SearchForm history={history} loading={loading} />
          </div>
        </div>
        <h1> {show.seriesName} </h1>
        <div>
          <img
            src={`https://www.thetvdb.com/banners/${poster.fileName}`}
            alt={show.seriesName}
          />
        </div>
        <p> Status: {show.status} </p>
        <p>
          {" "}
          Airs: {show.airsDayOfWeek} at {show.airsTime}{" "}
        </p>
        {genres}
        <p> Site rating: {show.siteRating}</p>
        <p> Description: </p>
        <p> {show.overview} </p>
        <div>
          <h1>
            Seasons: {episodes && episodes.length - 1} -{" "}
            {allEpisodes && allEpisodes.length} episodes{" "}
          </h1>
          {episodes}
        </div>
      </div>
    );
  } else if (loading) {
    return <h1> Loading ... </h1>;
  }
};

const mapStateToProps = state => ({
  shows: state.shows
});

export default connect(
  mapStateToProps,
  { getShow }
)(withRouter(Show));
