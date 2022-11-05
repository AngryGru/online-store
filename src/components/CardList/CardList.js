import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

const CardList = ({ data }) => {
  const onCardClick = (card, event) => {
    event.stopPropagation();

    if (event.target.tagName === "BUTTON") {
      console.log("BUY", card);
    } else {
      console.log("OPEN CARD", card.id);
    }
  };
  return (
    <div className="card-list">
      {data.map((card) => {
        return (
          <div key={card.id} onClick={(event) => onCardClick(card, event)}>
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              cost={card.cost}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
