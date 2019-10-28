import React from "react";

const Season = ({ episodes }) => {
  const content = episodes.map(ep => {
    return (
      <div key={ep.id}>
        <h3>
          Episode: {ep.episode} - {ep.title}
        </h3>
      </div>
    );
  });
  return <div>{content}</div>;
};

export default Season;
