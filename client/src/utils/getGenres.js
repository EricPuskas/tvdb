import React from "react";
import uuid from "uuid/v4";

const getGenres = genres => {
  if (!genres) return null;
  return genres.map(genre => (
    <li key={uuid()}>
      <span className="tag">{genre}</span>
    </li>
  ));
};

export default getGenres;
