import React from "react";
import Moment from "react-moment";
import isValidDate from "../../utils/isValidDate";
import Rating from "react-rating";
import { connect } from "react-redux";
import { loadModal } from "../../actions/modal";
import replaceImage from "../../utils/replaceImage";
import NoImageFound from "../../assets/img/no_image.png";

const Season = ({ episodes, loadModal }) => {
  const content = episodes.map(ep => {
    let MODAL_PROPS = {
      id: ep.id,
      title: ep.episodeName,
      width: "40%",
      left: "30%",
      top: "10%",
      header: ep.episodeName,
      director: ep.director,
      image: ep.filename,
      overview: ep.overview,
      episode: ep.airedEpisodeNumber
    };
    const triggerModal = () => {
      loadModal("EPISODE_MODAL", MODAL_PROPS);
    };
    return (
      <div key={ep.id} className="Episode">
        <h3>
          Episode: {ep.airedEpisodeNumber} - {ep.episodeName}
        </h3>
        <div>
          <p>
            {isValidDate(ep.firstAired) ? (
              <Moment format="MMM DD (YYYY)">{ep.firstAired}</Moment>
            ) : null}
          </p>
          <img
            onError={e => replaceImage(e, NoImageFound)}
            src={`https://www.thetvdb.com/banners/${ep.filename}`}
            alt={ep.episodeName}
          />
          <p>
            <span style={{ display: "block" }}>{`Rating: ${
              ep.siteRating ? ep.siteRating : 0
            } / 10 (${ep.siteRatingCount} reviews)`}</span>
            <Rating
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              stop={10}
              initialRating={ep.siteRating}
              readonly
            />{" "}
          </p>
          <button className="btn btn-secondary" onClick={triggerModal}>
            More Details
          </button>
        </div>
      </div>
    );
  });
  return <div className="Season">{content}</div>;
};

export default connect(
  null,
  { loadModal }
)(Season);
