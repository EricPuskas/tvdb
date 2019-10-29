import React from "react";
import Rating from "react-rating";

const ShowHeader = ({ title, genres, rating, ratingText }) => {
  return (
    <div className="Show-title">
      <h1> {title} </h1>
      <ul className="tags">{genres}</ul>
      <div>
        <Rating
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          stop={10}
          initialRating={rating}
          readonly
        />{" "}
        <span style={{ display: "block" }}>{ratingText}</span>
      </div>
    </div>
  );
};

export default ShowHeader;
