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
      <p>
        Status: <strong>{status}</strong>
      </p>
      <p>
        Network: <strong>{network}</strong>
      </p>
      <p>
        Airs:{" "}
        <strong>
          Every {airsDayOfWeek} at {airsTime}
        </strong>
      </p>
      <p>
        Seasons: <strong>{seasons} </strong>
      </p>
      <p>
        Total Episodes: <strong> {episodes}</strong>
      </p>
    </div>
  );
};

export default ShowData;
