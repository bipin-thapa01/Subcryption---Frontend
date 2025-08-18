"use client";

import { useState, useEffect } from "react";
import Card from "./card";
import Image from "next/image";
import "./card.css";

export default function CardContainer() {
  const [cardDetails, setCardDetails] = useState(null);
  const [cards, setCards] = useState(null);

  const filterCard = (cardDetails)=>{
    
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/card');
      const data = await res.json();
      setCardDetails(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if(cardDetails!=null){
      const filteredCards = filterCard(cardDetails);
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