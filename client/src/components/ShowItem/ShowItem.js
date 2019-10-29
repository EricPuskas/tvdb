import React from "react";
import { Link } from "react-router-dom";

import ShowHeader from "./ShowHeader";
import ShowBanner from "./ShowBanner";
import ShowDescription from "./ShowDescription";

import "./ShowItem.scss";

const ShowItem = ({ show }) => {
  if (show) {
    return (
      <div className="ShowItem" data-test="showitem">
        <Link to={`/shows/${show.id}`}>
          <div className="row">
            <div className="col-lg-3 col-12">
              <ShowHeader
                title={show.seriesName}
                firstAired={show.firstAired}
                network={show.network}
              />
            </div>
            <div className="col-lg-9 col-12">
              <ShowBanner banner={show.banner} title={show.seriesName} />
            </div>
            <div className="col-12 overview">
              <ShowDescription maxChars={350} overview={show.overview} />
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return null;
  }
};

export default ShowItem;
