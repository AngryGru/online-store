import React from "react";
import "./Card.css";

const Card = ({
  id,
  image,
  title,
  genres,
  release_date,
  age,
  cost,
  onClick,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        {image ? (
          <img src={image} />
        ) : (
          <img
            src={require("../../assets/empty-state.png")}
            alt="Default image"
          />
        )}
      </div>
      <div className="card-info">
        <div className="card-title">{title.toUpperCase()}</div>
        <div className="card-description">{`Genres: ${genres} | Release date: ${release_date} | ${age}`}</div>
        <div className="card-actions">
          <div className="card-actions__cost">{cost}$</div>
          <button className="card-actions__btn" onClick={onClick}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
