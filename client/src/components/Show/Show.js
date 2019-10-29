import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Actions
import { getShow } from "../../actions/api";

// Utilities
import groupEpisodes from "../../utils/groupEpisodes";

// Components
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import ShowPage from "./ShowPage";
import Loader from "../Loader/Loader";

// SCSS
import "./Show.scss";

const Show = ({ getShow, match, shows, history, errors }) => {
  const { loading } = shows;
  const { error } = errors;
  const loadingState = (
    <>
      <Loader />
      <div className="filler" />
    </>
  );

  const errorState = (
    <>
      <h3 className="Error">{error}</h3>
      <div className="filler" />
    </>
  );

  let seasons, allEpisodes, content;
  let data = shows.show_info.episodes.data;
  let foundShow = !!shows.show_info.show;

  // Get show based on id from url
  useEffect(() => {
    getShow(match.params.id);
  }, [getShow, match.params.id]);

  if (data !== undefined && data.length > 0) {
    /* Single array with size more than 100 becomes multiple array after building JSON  */
    // ES10 flat method
    allEpisodes = data.flat();

    // Group all episodes per seasons
    seasons = groupEpisodes(allEpisodes);
  }
  if (foundShow) {
    content = error ? null : (
      <ShowPage
        seasons={seasons}
        show_info={shows.show_info}
        totalEpisodes={allEpisodes && allEpisodes.length}
      />
    );

    const main = (
      <>
        {content}
        {error && errorState}
      </>
    );

    return (
      <div>
        <div className="Show">
          <div className="Show-Search">
            <Logo />
            <SearchForm history={history} loading={loading} />
          </div>
        </div>

        {loading && !error ? loadingState : main}
      </div>
    );
  } else return null;
};

const mapStateToProps = state => ({
  shows: state.shows,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getShow }
)(withRouter(Show));
