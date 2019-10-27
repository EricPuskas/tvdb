import React from "react";
import Moment from "react-moment";
import moment from "moment";
import { Link } from "react-router-dom";
import "./Shows.scss";
import NoBannerFound from "../../assets/img/no_banner.png";

const Show = ({ show }) => {
  const replaceImage = e => (e.target.src = NoBannerFound);
  let description;
  if (show.overview && show.overview.length > 0) {
    description = show.overview.substring(0, 500);
    if (show.overview.length > 500) description += "...";
  }
  let date = moment(show.firstAired).isValid();
  if (show) {
    return (
      <div className="Show">
        <Link to="/">
          <div className="row">
            <div className="col-3">
              <h2> {show.seriesName} </h2>
              <p>
                First Aired:{" "}
                <strong>
                  {date ? (
                    <Moment format="LL">{show.firstAired}</Moment>
                  ) : (
                    "Unknown"
                  )}
                </strong>
              </p>
              <p>
                Network:{" "}
                <strong>{show.network ? show.network : "Unknown"}</strong>{" "}
              </p>
            </div>
            <div className="col-9">
              <img
                key={show.slug}
                onError={e => replaceImage(e)}
                src={`https://www.thetvdb.com/banners/${show.banner}`}
                alt={show.seriesName}
              />{" "}
            </div>
            <div className="col-12 overview">
              <h3>Overview:</h3>
              <p> {description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return null;
  }
};

export default Show;
