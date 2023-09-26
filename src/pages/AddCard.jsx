import React from "react";
import { useState } from "react";
//import { useLoaderData, useNavigation } from "react-router-dom";
import DrawCard from "../components/DrawCard";

export function AddCard({ onAddCard }) {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expirationMonth: "",
    expirationYear: "",
    ccv: "",
    vendor: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (
      name === "cardNumber" ||
      name === "expirationMonth" ||
      name === "expirationYear"
    ) {
      const numericValue = value.replace(/\D/g, "");
      const formattedValue = numericValue.replace(/(\d{4})/g, "$1 ");
      // Don't update state if the card number exceeds 19 characters.
      setCardInfo({
        ...cardInfo,
        [name]: formattedValue,
      });
    } else if (name === "cardName") {
      // Use a regular expression to remove non-letter characters
      const letterValue = value.replace(/[^A-Za-z ]/g, "");

      // Set the state with the letter value
      setCardInfo((prevCardInfo) => ({
        ...prevCardInfo,
        [name]: letterValue,
      }));
    } else {
      setCardInfo({
        ...cardInfo,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var input = cardInfo.cardNumber;
    var value = input.replace(/\D/g, ""); // Remove non-digits

    if (value.length !== 16) {
      alert("Please enter a 16-digit number.");
    } else {
      onAddCard(cardInfo);
    }

    //setCards([...cards, cardInfo]);
    setCardInfo({
      cardNumber: "",
      cardName: "",
      expirationMonth: "",
      expirationYear: "",
      ccv: "",
      vendor: "masterCard", // Reset vendor to default
    });
  };

  return (
    <div>
      <div className="header">
        <h1>ADD A NEW BANK CARD</h1>
      </div>

      <div className="active-card">
        <DrawCard cardInfo={cardInfo} />
      </div>

      <div className="input-form">
        <div className="form">
          <form className="form-add-card" onSubmit={handleSubmit}>
            <label>CARD NUMBER</label>
            <br></br>
            <input
              className="cardNum"
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              maxLength={19}
              value={cardInfo.cardNumber}
              onChange={handleInputChange}
              required
            />
            <br></br>
            <label>CARDHOLDER NAME</label>
            <br></br>
            <input
              className="cardName"
              type="text"
              name="cardName"
              placeholder="Cardholder name"
              value={cardInfo.cardName}
              onChange={handleInputChange}
            />
            <br></br>
            <label>VALID THRU</label>
            <br></br>
            <input
              className="month"
              type="text"
              name="expirationMonth"
              placeholder="Month"
              maxLength={2}
              value={cardInfo.expirationMonth}
              onChange={handleInputChange}
            />
            /
            <input
              className="year"
              type="text"
              name="expirationYear"
              placeholder="Year"
              maxLength={2}
              value={cardInfo.expirationYear}
              onChange={handleInputChange}
            />
            <br></br>
            <label>CCV</label>
            <br></br>
            <input
              className="ccv"
              type="text"
              name="ccv"
              placeholder="ccv"
              minLength={3}
              maxLength={3}
              value={cardInfo.ccv}
              onChange={handleInputChange}
            />
            <br></br>
            <label>VENDOR</label>
            <br></br>
            <select
              className="vendor"
              onChange={handleInputChange}
              value={cardInfo.vendor}
              name="vendor"
            >
              <option value="masterCard">MASTER CARD</option>
              <option value="visa">VISA</option>
              <option value="americanExpress">AMERICAN EXPRESS</option>
            </select>
            <br></br>
            <button type="submit">Add Card</button>
          </form>
        </div>
      </div>
    </div>
  );
}
