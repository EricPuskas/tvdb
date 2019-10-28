import React, { useEffect } from "react";
import { connect } from "react-redux";
import Rating from "react-rating";
import { getShow } from "../../actions/api";
import { withRouter } from "react-router-dom";
import groupEpisodes from "../../utils/groupEpisodes";
import uuid from "uuid/v4";
import Season from "./Season";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import Accordion from "../Accordion/Accordion";
import Loader from "../Loader/Loader";
import replaceImage from "../../utils/replaceImage";
import NoPosterFound from "../../assets/img/no_poster.png";
import "./Show.scss";

const Show = ({ getShow, match, shows, history, errors }) => {
  const { loading } = shows;
  const { error } = errors;
  useEffect(() => {
    getShow(match.params.id);
  }, [getShow, match.params.id]);
  let episodes, seasons, allEpisodes, specials, seasons_length, content;
  if (
    shows.show_info.episodes.data !== undefined &&
    shows.show_info.episodes.data.length > 0
  ) {
    allEpisodes = shows.show_info.episodes.data.flat();

    seasons = groupEpisodes(allEpisodes);
    specials = [];
    episodes = seasons.map((episodes, index) => {
      if (index > 0 || episodes[index].airedSeason > 0) {
        return (
          <div
            label={`Season ${index === 0 ? index + 1 : index}`}
            isOpen={index === 0 ? true : false}
            key={uuid()}
            className="Shows-container"
          >
            <Season episodes={episodes} />
          </div>
        );
      } else if (index === 0) {
        specials = (
          <div
            label={`Movies / Specials / Non-Cannon / Others`}
            isOpen={false}
            key={uuid()}
            className="Shows-container"
          >
            <Season episodes={episodes} />
          </div>
        );
        return null;
      } else {
        return null;
      }
    });

    if (
      !Array.isArray(specials) &&
      specials.props.children.props.episodes.length > 0
    ) {
      episodes.push(specials);
      seasons_length = episodes.length - 2;
    } else if (episodes.length === 1) {
      seasons_length = episodes.length;
    } else {
      seasons_length = episodes.length - 1;
    }
  }
  if (shows.show_info.show) {
    const { show, poster } = shows.show_info;
    const genres = show.genre
      ? show.genre.map((g, i) => (
          <li key={i}>
            <span className="tag">{g}</span>
          </li>
        ))
      : null;

    if (!error) {
      content = (
        <div className="ShowContainer">
          <div className="row">
            <div className="col-12">
              <div className="Show-title">
                <h1> {show.seriesName} </h1>
                <ul className="tags">{genres}</ul>
                <div>
                  <Rating
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    stop={10}
                    initialRating={show.siteRating}
                    readonly
                  />{" "}
                  <span className="siteRating" style={{ display: "block" }}>
                    {" "}
                    {`${show.siteRating ? show.siteRating : 0} / 10 (${
                      show.siteRatingCount
                    } reviews)`}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-12">
              <div className="Show-poster">
                <img
                  onError={e => replaceImage(e, NoPosterFound)}
                  src={`https://www.thetvdb.com/banners/${poster.fileName}`}
                  alt={show.seriesName}
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="Show-overview">
                <p> {show.overview} </p>
              </div>

              <div>
                {episodes && (
                  <Accordion allowMultipleOpen>{episodes}</Accordion>
                )}
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="Show-data">
                <p>
                  Status: <strong>{show.status}</strong>
                </p>
                <p>
                  Airs:{" "}
                  <strong>
                    Every {show.airsDayOfWeek} at {show.airsTime}
                  </strong>
                </p>
                <p>
                  Seasons: <strong>{episodes && seasons_length} </strong>
                </p>
                <p>
                  Total Episodes:{" "}
                  <strong> {allEpisodes && allEpisodes.length}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      content = (
        <div className="Error">
          <h1>{error}</h1>
        </div>
      );
    }
    return (
      <div>
        <div className="Show">
          <div className="Show-Search">
            <Logo />
            <SearchForm history={history} loading={loading} />
          </div>
        </div>

        {loading && !error ? (
          <>
            <Loader />
            <div className="filler" />
          </>
        ) : (
          <>
            {content}
            <div className="filler" />
          </>
        )}
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
