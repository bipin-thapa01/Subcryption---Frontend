import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import Card from "./card";
import "./card.css";

const CardContainer = forwardRef((props, ref) => {
  const [cardDetails, setCardDetails] = useState(null);
  const [cards, setCards] = useState(null);

  const filterCard = (type) => {
    if (!cardDetails) return;
    if (type === "all") {
      setCards(cardDetails.map((item, index) => (
        <Card key={index} param={item} />
      )));
    } else {
      setCards(
        cardDetails
          .filter((item) => item.type.toLowerCase() === type)
          .map((item, index) => <Card key={index} param={item} />)
      );
    }
  };

  useImperativeHandle(ref, () => ({
    filterCard,
  }));

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://subcryption-backend.onrender.com/card");
      const data = await res.json();
      setCardDetails(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (cardDetails) {
      setCards(cardDetails.map((item, index) => (
        <Card key={index} param={item} />
      )));
    }
  }, [cardDetails]);

  return <div className="card-container">{cards}</div>;
});

export default CardContainer;
