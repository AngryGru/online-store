import React from "react";
import "./Card.css";

const Card = ({ id, image, title, description, cost }) => {
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
        <div className="card-description">{description}</div>
        <div className="card-actions">
          <div className="card-actions__cost">{cost}</div>
          <button className="card-actions__btn">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
