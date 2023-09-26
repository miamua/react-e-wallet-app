import React from "react";
import DrawCard from "../components/DrawCard";

export const testInfo = [
  {
    cardName: "Test Testson",
    cardNumber: "1234 5678 9101 1123",
    expirationMonth: "05",
    expirationYear: "2026",
    ccv: 585,
    vendor: "Master Card",
  },
];

export function Cards({ cards, cardInfo }) {
  return (
    <div>
      <div className="header">
        <h1>E-WALLET</h1>
      </div>

      {cards.length > 0 && (
        <div className="active-card">
          <DrawCard cards={cards} cardInfo={cards[0]} key={0} />
        </div>
      )}

      <div className="inActive">
        {cards.slice(1).map((cardInfo, index) => (
          <div className="nonActive-card">
            <DrawCard cards={cards} cardInfo={cardInfo} key={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
}
