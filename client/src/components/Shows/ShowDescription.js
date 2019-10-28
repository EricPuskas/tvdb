import React from "react";

const ShowDescription = ({ overview }) => {
  let description;
  if (overview && overview.length > 0) {
    description = overview.substring(0, 250);
    if (overview.length > 250) description += "...";
  }
  return (
    <>
      <h3>Overview:</h3>
      <p> {description}</p>
    </>
  );
};

export default ShowDescription;
