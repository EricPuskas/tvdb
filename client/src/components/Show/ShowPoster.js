import React from "react";

// Utilities
import replaceImage from "../../utils/replaceImage";

// Components
import NoPosterFound from "../../assets/img/no_poster.png";

const ShowPoster = ({ poster, title }) => {
  return (
    <div className="ShowPoster" data-test="poster">
      <img
        onError={e => replaceImage(e, NoPosterFound)}
        src={
          poster ? `https://www.thetvdb.com/banners/${poster}` : NoPosterFound
        }
        alt={title}
      />
    </div>
  );
};

export default ShowPoster;
