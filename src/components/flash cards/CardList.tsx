import React from "react";
import CardSummary from "./CardSummary";

const CardList = ({ cards }) => {
  return (
    <div>
      {cards &&
        cards.map((card: any) => {
          return <CardSummary card={card} key={card.id} />;
        })}
    </div>
  );
};

export default CardList;
