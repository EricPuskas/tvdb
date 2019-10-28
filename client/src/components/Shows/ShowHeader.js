import React from "react";
import Moment from "react-moment";
import isValidDate from "../../utils/isValidDate";

const ShowHeader = ({ title, firstAired, network }) => {
  return (
    <>
      <h2> {title} </h2>
      <hr />
      <div>
        First Aired:{" "}
        <strong>
          {isValidDate(firstAired) ? (
            <Moment format="MMM DD (YYYY)">{firstAired}</Moment>
          ) : (
            "Unknown"
          )}
        </strong>
      </div>
      <div>
        Network: <strong>{network ? network : "Unknown"}</strong>
      </div>
      <hr />
    </>
  );
};

export default ShowHeader;
