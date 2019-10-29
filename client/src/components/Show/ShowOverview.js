import React from "react";

const ShowOverview = ({ description }) => {
  return (
    <div className="ShowOverview" data-test="showoverview">
      <p> {description} </p>
    </div>
  );
};

export default ShowOverview;
