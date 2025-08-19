"use client";

import { useState, useEffect } from "react";
import IntroCard from "./introCard";
import DescriptionCard from "./descriptionCard";
import Requirement from "./requirement";
import Amount from "./amount";
import "./itemContainer.css"

export default function ItemContainer({ productId }) {
  const [itemData, setItemData] = useState(null);
  const [basicData, setBasicData] = useState(null);
  const [description, setDescription] = useState(null);
  const [amount, setAmount] = useState(null);
  const [requirement, setRequirement] = useState(null);
  const [leftCards, setLeftCards] = useState(null);
  const [rightCards, setRightCards] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item_id: productId }),
      });
      const data = await res.json();
      setItemData(data);
    }

    fetchData();
  }, [productId]);

  useEffect(() => {
    if (itemData) {
      setBasicData({
        name: itemData[0].name,
        company: itemData[0].company,
        imgurl: itemData[0].imgurl
      });
      setDescription(itemData[0].item_description);
      setAmount(itemData[0].amount);
      setRequirement(itemData[0].requirement);
    }
  }, [itemData]);

  useEffect(() => {
    setLeftCards(<div className="left-cards">
      <IntroCard data={basicData} desc={description} />
      <DescriptionCard desc={description} />
    </div>);
    setRightCards(
      <form className="right-cards">
        <Requirement requirement={requirement}/>
        <Amount amount={amount}/>
      </form>
    );
  }, [basicData, description, amount, requirement]);

  return (
    <div className="item-container">
      {leftCards}
      {rightCards}
    </div>
  );
}