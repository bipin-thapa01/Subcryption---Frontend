"use client";

import { useState, useEffect } from "react";

export default function ItemContainer({ productId }) {
  const [itemData, setItemData] = useState(null);
  const [basicData, setBasicData] = useState(null);
  const [description, setDescription] = useState(null);
  const [amount, setAmount] = useState(null);
  const [requirement, setRequirement] = useState(null);

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

  useEffect(()=>{
    console.log(basicData);
    console.log(description);
    console.log(amount);
    console.log(requirement);
  },[basicData, description, amount, requirement]);

  return (
    <div>
    </div>
  );
}