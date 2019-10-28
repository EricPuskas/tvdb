import React from "react";
import Moment from "react-moment";
import moment from "moment";

const ShowHeader = ({ title, firstAired, network }) => {
  let isValidDate = moment(firstAired).isValid();
  return (
    <>
      <h2> {title} </h2>
      <hr />
      <p>
        First Aired:{" "}
        <strong>
          {isValidDate ? (
            <Moment format="MMM DD (YYYY)">{firstAired}</Moment>
          ) : (
            "Unknown"
          )}
        </strong>
      </p>
      <p>
        Network: <strong>{network ? network : "Unknown"}</strong>{" "}
      </p>
      <hr />
    </>
  );
};

export default ShowHeader;
