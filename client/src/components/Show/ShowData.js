import React from "react";

const ShowData = ({
  network,
  status,
  airsDayOfWeek,
  airsTime,
  seasons,
  episodes
}) => {
  return (
    <div className="ShowData" data-test="showdata">
      {status ? (
        <p>
          Status: <strong>{status}</strong>
        </p>
      ) : null}

      {network ? (
        <p>
          Network: <strong>{network}</strong>
        </p>
      ) : null}

      {airsDayOfWeek && airsTime ? (
        <p>
          Airs:{" "}
          <strong>
            Every {airsDayOfWeek} at {airsTime}
          </strong>
        </p>
      ) : null}
      {seasons ? (
        <p>
          Seasons: <strong>{seasons} </strong>
        </p>
      ) : null}
      {episodes ? (
        <p>
          Total Episodes: <strong> {episodes}</strong>
        </p>
      ) : null}
    </div>
  );
};

export default ShowData;
