import React from "react";
import NoBannerFound from "../../assets/img/no_banner.png";
import replaceImage from "../../utils/replaceImage";

const ShowBanner = ({ banner, title }) => {
  return (
    <img
      onError={e => replaceImage(e, NoBannerFound)}
      src={`https://www.thetvdb.com/banners/${banner}`}
      alt={title}
    />
  );
};

export default ShowBanner;
