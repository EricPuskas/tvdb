import React from "react";
import NoBannerFound from "../../assets/img/no_banner.png";

const ShowBanner = ({ banner, title }) => {
  const replaceImage = e => (e.target.src = NoBannerFound);
  return (
    <img
      onError={e => replaceImage(e)}
      src={`https://www.thetvdb.com/banners/${banner}`}
      alt={title}
    />
  );
};

export default ShowBanner;
