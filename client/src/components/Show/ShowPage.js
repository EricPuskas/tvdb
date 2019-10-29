import React, { useState } from "react";

// Utilities
import getGenres from "../../utils/getGenres";

// Components
import Seasons from "./Seasons";
import ShowPoster from "./ShowPoster";
import ShowOverview from "./ShowOverview";
import ShowData from "./ShowData";
import ShowHeader from "./ShowHeader";

const ShowPage = ({ show_info, seasons, totalEpisodes }) => {
  const {
    show: {
      genre,
      siteRating,
      siteRatingCount,
      seriesName,
      overview,
      status,
      airsDayOfWeek,
      airsTime
    },
    poster
  } = show_info;

  const [seasonsCount, setSeasonsCount] = useState(0);
  const genres = getGenres(genre);
  const rating = `${
    siteRating ? siteRating : 0
  } / 10 (${siteRatingCount} reviews)`;

  return (
    <div className="ShowContainer">
      <div className="row">
        <div className="col-12">
          <ShowHeader
            title={seriesName}
            genres={genres}
            rating={siteRating}
            ratingText={rating}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <ShowPoster poster={poster.fileName} title={seriesName} />
        </div>
        <div className="col-lg-6 col-12">
          <ShowOverview description={overview} />
          {seasons && (
            <Seasons setSeasonsCount={setSeasonsCount} seasons={seasons} />
          )}
        </div>
        <div className="col-lg-3 col-12">
          <ShowData
            status={status}
            airsDayOfWeek={airsDayOfWeek}
            airsTime={airsTime}
            seasons={seasonsCount}
            episodes={totalEpisodes}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
