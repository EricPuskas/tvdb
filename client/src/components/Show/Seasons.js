import React from "react";
import uuid from "uuid/v4";

// Components
import Accordion from "../Accordion/Accordion";
import Season from "./Season";

const Seasons = ({ seasons, setSeasonsCount }) => {
  let specials = [];
  let AllSeasons = seasons.map((episodes, index) => {
    // index 0 usually is season 0
    // episodes[index].airedSeason handles the exceptions
    if (index > 0 || episodes[index].airedSeason > 0) {
      let isOpen = false;
      if (seasons.length === 1 && index === 0) isOpen = true; // Edge Case
      if (seasons.length > 1 && index === 1) isOpen = true;
      return (
        <div
          label={`Season ${index === 0 ? index + 1 : index}`}
          isOpen={isOpen}
          key={uuid()}
          className="Shows-container"
        >
          <Season episodes={episodes} />
        </div>
      );
    } else if (index === 0) {
      // If Season 0, put into a separate category
      specials = (
        <div
          label={`Movies / Specials / Non-Cannon / Others`}
          isOpen={false}
          key={uuid()}
          className="Shows-container"
        >
          <Season episodes={episodes} />
        </div>
      );
      // return null, as we'll add the specials at the very end of the array
      // Otherwise it would add it at the very beginning (index 0)
      return null;
    } else {
      return null;
    }
  });

  if (
    // Initialized as an array, if it has been changed, we have specials.
    !Array.isArray(specials) &&
    // Make sure the array of episodes is not empty
    specials.props.children.props.episodes.length > 0
  ) {
    AllSeasons.push(specials); // Adding specials to the end of the array
    setSeasonsCount(AllSeasons.length - 2); // Do not count specials for num of seasons
  } else if (seasons.length === 1) {
    setSeasonsCount(AllSeasons.length); // Edge case
  } else {
    setSeasonsCount(AllSeasons.length - 1);
  }

  return <Accordion allowMultipleOpen>{AllSeasons}</Accordion>;
};

export default Seasons;
