import React from "react";
import { Link } from "react-router-dom";

import ShowHeader from "./ShowHeader";
import ShowBanner from "./ShowBanner";
import ShowDescription from "./ShowDescription";

import "./Shows.scss";

const Show = ({ show }) => {
  if (show) {
    return (
      <div className="Show">
        <Link to="/">
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
              <ShowDescription overview={show.overview} />
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
