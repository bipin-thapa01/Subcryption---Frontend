"use client";

import { useState, useEffect, useRef, useImperativeHandle } from "react";
import Card from "./card";
import "./card.css";

export default function CardContainer({ ref }) {
  const [cardDetails, setCardDetails] = useState(null);
  const [cards, setCards] = useState(null);

  const filterCard = (type) => {
    if (cardDetails != null) {
      if (type === 'all') {
        setCards(cardDetails.map((item, index) => {
          return <Card key={index} param={item} />
        }));
      }
      else {
        setCards(cardDetails.filter((item) => {
          return item.type.toLowerCase() === type;
        }).map((item, index) => {
          return <Card key={index} param={item} />
        }));
      }
    }
  }

  useImperativeHandle(ref, () => ({
    filterCard: filterCard,
  }));

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://subcryption-backend.onrender.com/card');
      const data = await res.json();
      setCardDetails(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (cardDetails != null) {
      if (cards === null) { }
      setCards(cardDetails.map((item, index) => {
        return <Card key={index} param={item} />
      }));
    }
  }, [cardDetails]);

  return (
    <div className="card-container">
      {cards}
    </div>
  );
}