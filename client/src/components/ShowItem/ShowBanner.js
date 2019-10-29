import React from "react";
import NoBannerFound from "../../assets/img/no_banner.png";
import replaceImage from "../../utils/replaceImage";

const ShowBanner = ({ banner, title }) => {
  return (
    <img
      data-test="banner"
      onError={e => replaceImage(e, NoBannerFound)}
      src={banner ? `https://www.thetvdb.com/banners/${banner}` : NoBannerFound}
      alt={title}
    />
  );
};

export default ShowBanner;
