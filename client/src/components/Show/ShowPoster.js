import React from "react";

// Utilities
import replaceImage from "../../utils/replaceImage";

// Components
import NoPosterFound from "../../assets/img/no_poster.png";

const ShowPoster = ({ poster, title }) => {
  return (
    <div className="Show-poster">
      <img
        onError={e => replaceImage(e, NoPosterFound)}
        src={`https://www.thetvdb.com/banners/${poster}`}
        alt={title}
      />
    </div>
  );
};

export default ShowPoster;
