import React from "react";

const ShowDescription = ({ overview, maxChars }) => {
  let description;
  if (overview && overview.length > 0) {
    description = overview.substring(0, maxChars);
    if (overview.length > maxChars) description += "...";
  }
  return (
    <>
      <h3>Overview:</h3>
      <p>{description}</p>
    </>
  );
};

export default ShowDescription;
