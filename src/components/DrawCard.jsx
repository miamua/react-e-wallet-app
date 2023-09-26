import {
  Contactless,
  Chip,
  MasterCard,
  Visa,
  AMEX,
} from "../components/SVGComponents";
//import styles from "./DrawCard.module.css";
import "./card.css";

export default function DrawCard({ cardInfo }) {
  //console.log(logos.contactlessLogo);
  return (
    <div className="container">
      <div className="card">
        <div className="card-contactless">
          <div>
            <Contactless />
          </div>
        </div>
        <div className="card-chip">
          <Chip />
        </div>
        <div className="card-number">{cardInfo.cardNumber}</div>
        <div className="card-date-ccv">
          <div className="card-expiry">
            VALID THRU{" "}
            <span>
              {cardInfo.expirationMonth}/{cardInfo.expirationYear}
            </span>
          </div>
          <div className="card-ccv">
            CCV <span>{cardInfo.ccv}</span>
          </div>
        </div>
        <div className="card-name-logo">
          <div className="card-holderName">{cardInfo.cardName}</div>
          {cardInfo.vendor === "masterCard" ? (
            <MasterCard />
          ) : cardInfo.vendor === "visa" ? (
            <Visa />
          ) : cardInfo.vendor === "americanExpress" ? (
            <AMEX />
          ) : (
            <MasterCard />
          )}
        </div>
      </div>
    </div>
  );
}
