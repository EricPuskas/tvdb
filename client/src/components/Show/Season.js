import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";

// Actions
import { loadModal } from "../../actions/modal";

// Utils
import isValidDate from "../../utils/isValidDate";
import replaceImage from "../../utils/replaceImage";

// Components
import NoImageFound from "../../assets/img/no_image.png";
import Rating from "react-rating";

const Season = ({ episodes, loadModal }) => {
  const content = episodes.map(ep => {
    const triggerModal = () => {
      loadModal("EPISODE_MODAL", {
        id: ep.id,
        title: ep.episodeName,
        width: "60%",
        left: "20%",
        top: "5%",
        header: ep.episodeName,
        director: ep.director,
        image: ep.filename,
        overview: ep.overview,
        episode: ep.airedEpisodeNumber
      });
    };

    return (
      <div key={ep.id} className="Episode">
        <h3>
          Episode: {ep.airedEpisodeNumber} - {ep.episodeName}
        </h3>
        <div>
          <p>
            Aired on{" "}
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
