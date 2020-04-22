import React from "react";

const CardSummary = ({ card }: any) => {
  return (
    <div className="card">
      <div className="card-content">
        <h4 className="card-title">{card.title}</h4>
        <p>By David Orson</p>
        <p className="caption">22nd April, 2pm</p>
      </div>
    </div>
  );
};

export default CardSummary;
